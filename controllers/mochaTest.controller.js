import fetch from 'node-fetch';
import MochaTest from '../models/mochaTest.model.js';

export const runMochaTest = async (req, res) => {
  const { endpoint, method, headers, body, testDescription } = req.body;

  try {
    // Validate URL format
    let validatedUrl;
    try {
      validatedUrl = new URL(endpoint);
      if (!['http:', 'https:'].includes(validatedUrl.protocol)) {
        throw new Error('URL must use HTTP or HTTPS protocol');
      }
    } catch (urlError) {
      return res.status(400).json({ 
        error: `Invalid URL format: ${urlError.message}` 
      });
    }

    const start = Date.now();

    // Prepare fetch options
    const fetchOptions = {
      method: method || 'GET',
      headers: headers || {},
    };

    // Add body for non-GET requests
    if (method !== 'GET' && body) {
      fetchOptions.body = JSON.stringify(body);
      // Ensure Content-Type is set for POST requests with body
      if (!fetchOptions.headers['Content-Type'] && !fetchOptions.headers['content-type']) {
        fetchOptions.headers['Content-Type'] = 'application/json';
      }
    }

    console.log('Making request to:', endpoint);
    console.log('Fetch options:', JSON.stringify(fetchOptions, null, 2));

    let response;
    let responseBody;

    try {
      response = await fetch(endpoint, fetchOptions);
      
      // Try to parse as JSON, fall back to text if it fails
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        responseBody = await response.json();
      } else {
        const textResponse = await response.text();
        try {
          responseBody = JSON.parse(textResponse);
        } catch {
          responseBody = { text: textResponse };
        }
      }
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return res.status(500).json({ 
        error: `Network error: ${fetchError.message}` 
      });
    }

    const assertions = [];
    let passed = true;

    // Status code assertion
    if (response.status >= 200 && response.status < 300) {
      assertions.push({ 
        message: `Status code is ${response.status} (Success)`, 
        passed: true 
      });
    } else {
      passed = false;
      assertions.push({ 
        message: `Expected 2xx but got ${response.status}`, 
        passed: false,
        error: `HTTP ${response.status}: ${response.statusText}`
      });
    }

    // Response format assertion
    if (responseBody && typeof responseBody === 'object') {
      assertions.push({ 
        message: 'Response is valid JSON object', 
        passed: true 
      });
    } else {
      // Don't fail the test if response isn't JSON, just note it
      assertions.push({ 
        message: 'Response is not a JSON object', 
        passed: true // Changed to true since this might be expected
      });
    }

    // Response time assertion
    const duration = Date.now() - start;
    if (duration < 5000) { // Less than 5 seconds
      assertions.push({ 
        message: `Response time is acceptable (${duration}ms)`, 
        passed: true 
      });
    } else {
      assertions.push({ 
        message: `Response time is slow (${duration}ms)`, 
        passed: true // Warning, not failure
      });
    }

    // Save in DB
    try {
      await MochaTest.create({
        endpoint, 
        method, 
        headers, 
        body, 
        testDescription,
        passed, 
        assertions, 
        response: responseBody, 
        duration
      });
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Don't fail the API test because of DB issues
    }

    res.json({
      passed,
      assertions,
      response: responseBody,
      duration,
      statusCode: response.status
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ 
      error: `Unexpected error: ${error.message}`,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
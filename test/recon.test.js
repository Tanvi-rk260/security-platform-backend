const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // agar alag export file hai to edit karna padega
const expect = chai.expect;

chai.use(chaiHttp);

describe('Recon API Testing', () => {
    it('should return recon data for a valid domain', (done) => {
        chai.request(server)
            .post('/api/recon')
            .send({ domain: 'example.com' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('whois');
                expect(res.body).to.have.property('dns');
                expect(res.body).to.have.property('ip_info');
                expect(res.body).to.have.property('headers');
                done();
            });
    });

    it('should return 400 for missing domain', (done) => {
        chai.request(server)
            .post('/api/recon')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('error');
                done();
            });
    });
});

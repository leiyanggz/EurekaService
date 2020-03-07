const Request = require('supertest');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


const eureka = function() {
    let request = Request('http://localhost:8761');
    request
        .get(encodeURI('/eureka/apps'))
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
			console.log(err);
            console.log(res);
        });
};

eureka()

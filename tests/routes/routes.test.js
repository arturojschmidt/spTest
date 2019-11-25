const request = require('supertest')
const app = require('../../index')

describe('routes return statusCode 200', () => {
    test('/client GET method returns status 200', (done) => {
        request(app).get('/client').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    test('admin GET method returns status 200', (done) =>{
        request(app).get('/admin').then((response)=>{
            expect(response.statusCode).toBe(200)
            done()
        })
    })
  
});

describe("routes have Access-Control-Allow-Origin header set", ()=>{
    test('/client' , (done) =>{
        request(app).get('/client').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    test('/admin' , (done) =>{
        request(app).get('/admin').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    test('/auth/google' , (done) =>{
        request(app).get('/auth/google/login').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    test('/auth/google/success' , (done) =>{
        request(app).get('/auth/google/success').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    test('/auth/google/failed' , (done) =>{
        request(app).get('/auth/google/failed').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    test('/' , (done) =>{
        request(app).get('/').then((response) =>{
            expect(response.header['access-control-allow-origin']).toBe('*')
            done()
        })
    })
    
    

})


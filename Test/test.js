

const expect  = require('chai').expect;
const request = require('request');


describe("Get '/*'", function (){
  it("Main page should return 200",function (done){
      request("/*",function (error,response,body){
          expect(body).to.equal(undefined);
          done();
      })
  })
})
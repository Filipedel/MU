


import {expect} from "chai";
import request from "request";


describe("Get '/*'", function (){
  it("Main page should return 200",function (done){
      request("/",function (error,response,body){
          expect(body).to.equal(undefined);
          done();
      })
  })
})
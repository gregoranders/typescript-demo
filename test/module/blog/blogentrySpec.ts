/// <reference path="../../typings.d.ts" />

var chai: Chai.ChaiStatic = require("chai");
var sinon: Sinon.SinonStatic = require("sinon");
var expect: Chai.ExpectStatic = chai.expect;

import {BlogEntry} from "../../../src/module/blog/blogentry";

describe("BlogEntry", (): void => {

  var id: number,
    title: string,
    body: string,
    created_at: Date;

  beforeEach((): void => {

    this.sinon = sinon.sandbox.create();

    id = 1;
    title = "test";
    body = "text";
    created_at = new Date();
  });

  afterEach((): void => {
    this.sinon.restore();
  });

  it("should return 1", (): void => {

    var testSubject: BlogEntry = new BlogEntry(id, title, body, created_at);

    expect(testSubject.id).to.be.equal(id);
  });

  it("should return JSON", (): void => {

    var testSubject: BlogEntry = new BlogEntry(id, title, body, created_at);

    expect(testSubject.toJSON()).to.be.deep.equal({
      body: body,
      created_at: created_at,
      id: 1,
      title: title,
    });
  });

});

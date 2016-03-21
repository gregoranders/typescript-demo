/// <reference path="../../typings.d.ts" />

var chai: Chai.ChaiStatic = require("chai");
var sinon: Sinon.SinonStatic = require("sinon");
var expect: Chai.ExpectStatic = chai.expect;

import {IEntry} from "../../../src/module/blog/entry";
import {Blog} from "../../../src/module/blog/component";
import {Service} from "../../../src/module/blog/service";

describe("Blog", (): void => {

  var service: Service = <any>{
    persist: (): void => {
      // noop
    },
  };

  var id: number,
    title: string,
    body: string,
    stub: Sinon.SinonStub,
    entity: IEntry;

  beforeEach((): void => {

    this.sinon = sinon.sandbox.create();

    id = 1;
    title = "test";
    body = "text";

    stub = this.sinon.stub(service, "persist", (entry: IEntry): void => {
      entity = entry;
      expect(entry.id).to.be.equal(id);
    });
  });

  afterEach((): void => {
    this.sinon.restore();
  });

  it("should delegate to service", (): void => {

    var testSubject: Blog = new Blog(service);

    testSubject.create(title, body);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith(entity)).to.be.true;
  });

});

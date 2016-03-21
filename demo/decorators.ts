
function log(target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {

  return {
    value: function (...args: any[]) {

      let argsAsString: string = args
        .map(b => JSON.stringify(b))
        .join();

      let result = descriptor.value.apply(this, args);

      let resultAsString = JSON.stringify(result);

      if (result === this) {
        console.log(`Call: ${(<any>(target.constructor)).name}::${methodName}(${argsAsString})`);
      } else {
        console.log(`Call: ${(<any>(target.constructor)).name}::${methodName}(${argsAsString}) => ${resultAsString}`);
      }

      return result;
    },
  };
}

class DecoratorDemo {

  public constructor(private cnt: number = 0) {}

  public get count(): number {
    return this.cnt;
  }

  @log
  public run(): this {

    this.cnt = this._do(this.count);

    return this;
  }

  @log
  private _do(value: number): number {
    return value + this.cnt + 1;
  }
}

new DecoratorDemo().run().run();

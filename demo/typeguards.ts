class TypeGuardClass {

  public constructor(public name) {

  }
}

function getSomething(value: number | string | TypeGuardClass): number {

  if (value instanceof TypeGuardClass) {
    return value.name.length;
  } else if (typeof value === "string") {
    return value.length;
  } else {
    return value;
  }

}

console.log(getSomething(new TypeGuardClass("six")));
console.log(getSomething("five"));
console.log(getSomething(5));

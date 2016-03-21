enum MachineType {
  ROBOT = 2,
  SHIP
}

interface ICharacter {

  id: number;

  name: string;
}

interface IMachine extends ICharacter {

  type: MachineType;
}

class PersonImpl implements ICharacter {

  constructor(private __id: number, private __name: string) {

  }

  public get id(): number {
    return this.__id;
  }

  public get name() {

    let func: () => string = (): string => {
      return this.__name;
    };

    return func();
  }

  public set name(value: string) {
    this.__name = value;
  }

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
   *
   * @returns {{id: number, name: string}}
   */
  public toJSON(): ICharacter {
    return {
      id: this.id,
      name: this.name,
    };
  }
}

class MachineImpl extends PersonImpl implements IMachine {

  constructor(id: number, name: string, private __type: MachineType) {
    super(id, name);
  }

  public get type(): MachineType {
    return this.__type;
  }

  public toJSON(): IMachine {

    let val: IMachine = <IMachine>super.toJSON();

    val.type = this.type;

    return val;
  }
}

var arthur = new PersonImpl(1, "Arthur Dent"),
    ford = new PersonImpl(2, "Ford Prefect"),
    marvin = new MachineImpl(2, "Marvin", MachineType.ROBOT),
    ship = new MachineImpl(3, "Heart of Gold", MachineType.SHIP);

var characters: ICharacter[] = [];
  characters.push(arthur);
  characters.push(ford);
  characters.push(marvin);
  characters.push(ship);

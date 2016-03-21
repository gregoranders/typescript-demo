// import external
import {IEntry} from "./entry";

/**
 * A simple Service.
 */
export class Service {

  /**
   * Persists entry.
   */
  public persist(entry: IEntry): void {

    let data: any = JSON.stringify(entry);

    // debugger;

    console.log("As JSON:" , data);
    console.log("As String:" , entry.toString());
  }

}

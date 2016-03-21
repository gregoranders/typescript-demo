// import external
import {IEntry} from "./entry";

/**
 * Default blog entry implementation simulating an immutable object.
 */
export class BlogEntry implements IEntry {

  /**
   * Default constructor.
   *
   * @param __id blog entry id
   * @param __title blog entry title
   * @param __body blog entry text
   * @param __created_at blog entry creation date
   */
  public constructor(private __id: number, private __title: string, private __body: string, private __created_at: Date) {

  }

  /**
   * Returns the blog entry id.
   *
   * @returns blog entry id
   */
  public get id(): number {

    let func: () => number = (): number => {
      return this.__id;
    };

    return func();
  }

  /**
   * Returns the blog entry title.
   *
   * @returns blog entry tile
   */
  public get title(): string {
    return this.__title;
  }

  /**
   * Returns the blog entry text.
   *
   * @returns blog entry text
   */
  public get body(): string {
    return this.__body;
  }

  /**
   * Returns the blog entry creation date.
   *
   * @returns blog entry creation date
   */
  public get created_at(): Date {
    return this.__created_at;
  }

  /**
   * Returns the blog entry JSON representation.
   *
   * Without this method JSON representation of this object will contains keys
   * prefixed with '__'. See constructor.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
   *
   * @returns blog entry JSON representation
   */
  public toJSON(): IEntry {
    return {
      body: this.body,
      created_at: this.created_at,
      id: this.id,
      title: this.title,
    };
  }

  /**
   * Returns the blog entry string representation.
   *
   * @returns blog entry as string
   */
  public toString(): string {
    return "title: " + this.title + " body: " + this.body.substring(0, 4) + "...";
  }
}

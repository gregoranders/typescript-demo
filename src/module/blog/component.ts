// import external
import {IEntry} from "./entry";
import {BlogEntry} from "./blogentry";
import {Service as BlogService} from "./service";

/**
 * A simple Blog.
 */
export class Blog {

  /**
   * Blog entries.
   */
  private __entries: IEntry[] = [];

  /**
   * Default constructor.
   *
   * @param __service BlogService
   */
  public constructor(private __service: BlogService = new BlogService()) {

  }

  /**
   * Returns a created blog entry.
   *
   * @param title blog entry title
   * @param text blog entry text
   */
  public create(title: string, text: string): IEntry {

    let now: Date = new Date(),
        id: number = this.entries.length + 1;

    return this.add(new BlogEntry(id, title, text, now));
  }

  /**
   * Returns blog entries.
   *
   * @returns {IEntry[]}
   */
  public get entries(): IEntry[] {
    return this.__entries;
  }

  private add(entry: IEntry): IEntry {

    this.__entries.push(entry);

    this.__service.persist(entry);

    return entry;
  }
}

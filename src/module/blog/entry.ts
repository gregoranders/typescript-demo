/**
 * An Entry represents a single blog entry.
 */
export interface IEntry {

  /**
   * Blog entry id.
   */
  id: number;

  /**
   * Blog entry title.
   */
  title: string;

  /**
   * Blog entry text.
   */
  body: string;

  /**
   * Date of creation.
   */
  created_at: Date;
}

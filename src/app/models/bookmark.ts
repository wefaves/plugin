export class Bookmark {
  private _bookmark_folder_child: Array<Bookmark>;
  private _bookmarks: Array<Bookmark>;
  private _date_added: string;
  private _date_group_modified: string;
  private _id: number;
  private _index_pos: number;
  private _parent_id: number;
  private _title: string;
  private _url: string;
  public static GetNewInstance(): Bookmark {
    return new Bookmark(null, null, null, null, null, null, null, null, null);
  }
  public static ParseFromObject(object): Bookmark {
    const bookmark = Bookmark.GetNewInstance();
    if (object) {
      if (object.bookmark_folder_child) {
        bookmark.bookmark_folder_child = Bookmark.ParseFromObjectToArray(object.bookmark_folder_child);
      }
      if (object.bookmarks) {
        bookmark.bookmarks = Bookmark.ParseFromObjectToArray(object.bookmarks);
      }
      bookmark.date_added = object.date_added;
      bookmark.date_group_modified = object.date_group_modified;
      bookmark.id = object.id;
      bookmark.index_pos = object.index_pos;
      bookmark.parent_id = object.parent_id;
      bookmark.title = object.title;
      bookmark.url = object.url;
    }
    return bookmark;
  }
  public static ParseFromObjectToArray(object): Array<Bookmark> {
    const bookmarks = new Array<Bookmark>();
    if (object) {
      for (const bookmark of object) {
        bookmarks.push(Bookmark.ParseFromObject(bookmark));
      }
    }
    return bookmarks;
  }
  public static GetModel(bookmark: Bookmark): Object {
    return {
      data : {
        index: bookmark.id,
        title: bookmark._title,
        url: bookmark._url
      }
    }
  }
  constructor(bookmark_folder_child: Array<Bookmark>, bookmarks: Array<Bookmark>,
              date_added: string, date_group_modified: string, id: number,
              index_pos: number, parent_id: number, title: string, url: string) {
    this._bookmark_folder_child = bookmark_folder_child;
    this._bookmarks = bookmarks;
    this._date_added = date_added;
    this._date_group_modified = date_group_modified;
    this._id = id;
    this._index_pos = index_pos;
    this._parent_id = parent_id;
    this._title = title;
    this._url = url;
  }
  get bookmark_folder_child(): Array<Bookmark> {
    return this._bookmark_folder_child;
  }
  set bookmark_folder_child(value: Array<Bookmark>) {
    this._bookmark_folder_child = value;
  }
  get bookmarks(): Array<Bookmark> {
    return this._bookmarks;
  }
  set bookmarks(value: Array<Bookmark>) {
    this._bookmarks = value;
  }
  get date_added(): string {
    return this._date_added;
  }
  set date_added(value: string) {
    this._date_added = value;
  }
  get date_group_modified(): string {
    return this._date_group_modified;
  }
  set date_group_modified(value: string) {
    this._date_group_modified = value;
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get index_pos(): number {
    return this._index_pos;
  }
  set index_pos(value: number) {
    this._index_pos = value;
  }
  get parent_id(): number {
    return this._parent_id;
  }
  set parent_id(value: number) {
    this._parent_id = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }
}

export class Bookmark {

  private _children: Array<Bookmark>;
  private _dateAdded: number;
  private _dateGroupModified: number;
  private _id: number;
  private _index: number;
  private _parentId: number;
  private _title: string;
  private _url: string;

  public static GetNewInstance(): Bookmark {
    return new Bookmark(null, null, null, null, null, null, null, null);
  }

  public static ParseFromObject(object): Bookmark {
    const bookmark = Bookmark.GetNewInstance();

    if (object) {
      if (object.children) {
        const children = new Array<Bookmark>();

        for (const child of object.children) {
          children.push(Bookmark.ParseFromObject(child));
        }
        bookmark.children = children;
      }
      bookmark.dateAdded = object.dateAdded;
      bookmark.dateGroupModified = object.dateGroupModified;
      bookmark.id = object.id;
      bookmark.index = object.index;
      bookmark.parentId = object.parentId;
      bookmark.title = object.title;
      bookmark.url = object.url;
      bookmark.dateAdded = object.dateAdded;
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

  constructor(children: Array<Bookmark>, dateAdded: number, dateGroupModified: number,
              id: number, index: number, parentId: number, title: string, url: string) {
    this._children = children;
    this._dateAdded = dateAdded;
    this._dateGroupModified = dateGroupModified;
    this._id = id;
    this._index = index;
    this._parentId = parentId;
    this._title = title;
    this._url = url;
  }

  get children(): Array<Bookmark> {
    return this._children;
  }

  set children(value: Array<Bookmark>) {
    this._children = value;
  }

  get dateAdded(): number {
    return this._dateAdded;
  }

  set dateAdded(value: number) {
    this._dateAdded = value;
  }

  get dateGroupModified(): number {
    return this._dateGroupModified;
  }

  set dateGroupModified(value: number) {
    this._dateGroupModified = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get parentId(): number {
    return this._parentId;
  }

  set parentId(value: number) {
    this._parentId = value;
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

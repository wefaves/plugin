export class History {

  private _itemId: string;
  private _title: string;
  private _lastVisitTime: number;
  private _typedCount: string;
  private _url: string;
  private _visitCount: string;

  public static GetNewInstance(): History {
    return new History(null, null, null, null, null, null);
  }

  public static ParseFromObject(object): History {
    const history = History.GetNewInstance();

    if (object) {
      history.itemId = object.item_id;
      history.title = object.title;
      history.lastVisitTime = object.last_visit_time;
      history.typedCount = object.typed_count;
      history.url = object.url;
      history.visitCount = object.visit_count;
    }

    return history;
  }

  public static ParseFromObjectToArray(object): Array<History> {
    const array = new Array<History>();

    if (object) {
      for (const entry of object) {
        array.push(History.ParseFromObject(entry));
      }
    }
    return array;
  }

  constructor(itemId: string, title: string, lastVisitTime: number, typedCount: string, url: string, visitCount: string) {
    this._itemId = itemId;
    this._title = title;
    this._lastVisitTime = lastVisitTime;
    this._typedCount = typedCount;
    this._url = url;
    this._visitCount = visitCount;
  }

  get itemId(): string {
    return this._itemId;
  }

  set itemId(value: string) {
    this._itemId = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get lastVisitTime(): number {
    return this._lastVisitTime;
  }

  set lastVisitTime(value: number) {
    this._lastVisitTime = value;
  }

  get typedCount(): string {
    return this._typedCount;
  }

  set typedCount(value: string) {
    this._typedCount = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get visitCount(): string {
    return this._visitCount;
  }

  set visitCount(value: string) {
    this._visitCount = value;
  }
}

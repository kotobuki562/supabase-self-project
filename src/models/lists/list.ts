export default class List {
  // private readonly _id: number;
  private _name: string;
  private _title: string;
  private _text: string;
  private _category: string;
  private _emojiInfo: {};
  private _createAt: string | null;
  private _updateAt: string | null;

  constructor(
    // id: number,
    name: string,
    title: string,
    text: string,
    category: string,
    emojiInfo: {},
    createAt: string | null,
    updateAt: string | null
  ) {
    // this._id = id;
    this._name = name;
    this._title = title;
    this._text = text;
    this._category = category;
    this._emojiInfo = emojiInfo;
    this._createAt = createAt;
    this._updateAt = updateAt;
  }

  // get id(): number {
  //   return this._id;
  // }

  get name(): string {
    return this._name;
  }

  get title(): string {
    return this._title;
  }

  get text(): string {
    return this._text;
  }

  get category(): string {
    return this._category;
  }

  get emojiInfo(): {} {
    return this._emojiInfo;
  }

  get createAt(): string | null {
    return this._createAt;
  }

  get updateAt(): string | null {
    return this._updateAt;
  }

  changeEmojiInfo(emojiInfo: {}): void {
    this._emojiInfo = emojiInfo;
  }

  setChangeCreateAt(createAt: string | null): void {
    this._createAt = createAt;
  }

  get toObject(): Object {
    return {
      // id: this.id,
      name: this.name,
      title: this.title,
      text: this.text,
      category: this.category,
      emojiInfo: this.emojiInfo,
      createAt: this.createAt,
      updateAt: this.updateAt,
    };
  }
}

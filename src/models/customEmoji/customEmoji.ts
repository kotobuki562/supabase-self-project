export default class CustomEmoji {
  private _name: string;
  private _short_names: string[];
  private _text: string;
  private _keywords: string[];
  private _imageUrl: string;
  private _customCategory: string;
  private _createAt: string | null;

  constructor(
    name: string,
    short_names: string[],
    text: string,
    keywords: string[],
    imageUrl: string,
    customCategory: string,
    createAt: string | null
  ) {
    this._name = name;
    this._short_names = short_names;
    this._text = text;
    this._keywords = keywords;
    this._imageUrl = imageUrl;
    this._customCategory = customCategory;
    this._createAt = createAt;
  }

  get name(): string {
    return this._name;
  }

  get short_names(): string[] {
    return this._short_names;
  }

  get text(): string {
    return this._text;
  }

  get keywords(): string[] {
    return this._keywords;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get customCategory(): string {
    return this._customCategory;
  }

  get createAt(): string | null {
    return this._createAt;
  }

  changeShortNames(short_names: string[]): void {
    this._short_names = short_names;
  }

  setChangeCreateAt(createAt: string | null): void {
    this._createAt = createAt;
  }

  get toObject(): Object {
    return {
      name: this.name,
      short_names: this.short_names,
      text: this.text,
      keywords: this.keywords,
      imageUrl: this.imageUrl,
      customCategory: this.customCategory,
      createAt: this.createAt,
    };
  }
}

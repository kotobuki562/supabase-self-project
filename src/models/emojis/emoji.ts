export default class Emoji {
  private readonly _id: number;
  private _list_id: number;
  private _emoji: string;
  private _createAt: string | null;

  constructor(
    id: number,
    list_id: number,
    emoji: string,
    createAt: string | null
  ) {
    this._id = id;
    this._list_id = list_id;
    this._emoji = emoji;
    this._createAt = createAt;
  }

  get id(): number {
    return this._id;
  }

  get list_id(): number {
    return this._list_id;
  }

  get emoji(): string {
    return this._emoji;
  }

  get createAt(): string | null {
    return this._createAt;
  }

  changeEmoji(emoji: string): void {
    this._emoji = emoji;
  }

  setChangeCreateAt(createAt: string | null): void {
    this._createAt = createAt;
  }

  get toObject(): Object {
    return {
      id: this.id,
      list_id: this.list_id,
      emoji: this.emoji,
      createAt: this.createAt,
    };
  }
}

import { IUser, UserItem } from "./user";

export class Model {
  items : Array<UserItem> = [];

  constructor(){
    this.items.push(new UserItem());
    this.items.push(new UserItem());
    this.items.push(new UserItem());
    this.items.push(new UserItem());
    this.items.push(new UserItem());

  }

  getItems() : Array<UserItem> {
    return this.items;
  }
}


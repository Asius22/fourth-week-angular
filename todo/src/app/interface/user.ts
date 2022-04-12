export interface IUser {
  id: string
  name: string
  password: string
  email: string
  enabled?: boolean
}

export class UserItem implements IUser{
  id: string
  name: string
  password: string
  email: string
  enabled?: boolean

  constructor(){
    this.id = "1";
    this.name="a"
    this.password="c123"
    this.email = "c@c.it"
  }
}



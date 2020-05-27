import { Identifier } from '../identifier';

export class User extends Identifier {
  userName: string;
  userFullName: string;
  password: string;
  sex;
  email: string;
  telephone: string;
  mobilephone: string;
  address: string;
}

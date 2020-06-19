export class User {
  userId: number;
  userName: string;
  firstName: string;
  surname: string;
  password: string;
  email: string;
  role: string;

  constructor(username: string, firstName: string, surname: string, password: string, email: string, role: string) {
    this.userName = username;
    this.firstName = firstName;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}

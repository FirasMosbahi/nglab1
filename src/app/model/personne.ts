export class Personne {
  id: number;
  name: string;
  firstname: string;
  path: string;
  job: string;
  age: number;
  cin: number;
  constructor(
    id: number,
    name: string,
    firstname: string,
    age: number,
    path: string,
    cin: number,
    job: string,
  ) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}

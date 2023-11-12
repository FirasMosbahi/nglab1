export class Personne {
  id: number;
  name: string;
  firstname: string;
  motto : string;
  path: string;
  job: string;
  age: number;
  cin: number;
  skills : string[];
  followers : number;
  following : number;
  projects : number;

  constructor(id: number, name: string, firstname: string,motto : string,path: string,job : string , age : number , cin : number,skills: string[],followers: number,following: number,projects: number){
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.motto = motto;
    this.path = path;
    this.job = job;
    this.age = age;
    this.cin = cin;
    this.skills = skills;
    this.followers = followers;
    this.following = following;
    this.projects = projects;
  }

  public static fromJson(json: any): Personne {
    return new Personne(
      json.id,
      json.name,
      json.firstname,
      'To be or not to be, this is my awesome motto!',
      json.path,
      json.job,
      json.age,
      json.cin,
      ['html' , 'css' , 'bootstrap' , 'angular'],
      250,
      275,
      35
    );
  }
  public static fromJsonArray(jsonArray: any[]): Personne[] {
    return jsonArray.map((element) => Personne.fromJson(element))
  }
}

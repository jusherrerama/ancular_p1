export class User {
 id: number;
 documment: number;
 first_name: string = '';
 last_name: string = '';
 username: string = '';
 city: string = '';
 gender: string = '';
 email: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 
}
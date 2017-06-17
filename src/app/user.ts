export class User {
 id: number;
 document: number;
 first_name: string = '';
 last_name: string = '';
 username: string = '';
 city: string = '';
 gender: string = '';
 email: string = '';
 image?: HTMLImageElement;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  } 
}
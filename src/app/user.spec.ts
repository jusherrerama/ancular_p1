import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
      documment: 1234567890,
      first_name: 'juan',
      last_name: 'garzon',
      username: 'jusman',
      gender: 'male',
      email: '123@gmail.com'
    });
    expect(user.documment).toEqual(1234567890);
    expect(user.first_name).toEqual('juan');
    expect(user.last_name).toEqual('garzon');
    expect(user.username).toEqual('jusman');
    expect(user.gender).toEqual('male');
    expect(user.email).toEqual('123@gmail.com');
  });
});
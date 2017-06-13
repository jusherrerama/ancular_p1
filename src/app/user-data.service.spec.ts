import { TestBed, inject } from '@angular/core/testing';
import {User} from './user';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should be created', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
    
  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([UserDataService], (service: UserDataService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({document: 123456789 , city: "Boyaca"});
      let user2 = new User({document: 987654321 , city: "Bogota"});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });
    
  describe('#save(user)', () => {

    it('should automatically assign an incrementing id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({document: 123456789 , city: "Boyaca"});
      let user2 = new User({document: 987654321 , city: "Bogota"});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });
    
    
  describe('#deleteUserById(id)', () => {

    it('should remove user with the corresponding id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({document: 123456789 , city: "Boyaca"});
      let user2 = new User({document: 987654321 , city: "Bogota"});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(1);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUserById(2);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({document: 123456789 , city: "Boyaca"});
      let user2 = new User({document: 987654321 , city: "Bogota"});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUserById(3);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#updateUserById(id, values)', () => {

    it('should return user with the corresponding id and updated data', inject([UserDataService], (service: UserDataService) => {
      let user = new User({document: 987654321 , city: "Bogota"});
      service.addUser(user);
      let updatedUser = service.updateUserById(1, {
        city: "Boyaca"
      });
      expect(updatedUser.city).toEqual('Boyaca');
    }));

    it('should return null if user is not found', inject([UserDataService], (service: UserDataService) => {
      let user = new User({document: 987654322 , city: "Boyaca"});
      service.addUser(user);
      let updatedUser = service.updateUserById(2, {
        city: 'Bogota'
      });
      expect(updatedUser).toEqual(null);
    }));

  });

      
    
});

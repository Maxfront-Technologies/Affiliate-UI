import { User } from './user.entity';

describe('User.Entity', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});

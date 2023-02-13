import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);

      if (user.id) {
        return user;
      }
      throw new Error('user not found');
    } catch (error) {
      throw new Error(`error finding user: ${error}`);
    }
  }
}

export { ShowUserProfileUseCase };

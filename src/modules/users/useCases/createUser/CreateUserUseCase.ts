import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    try {
      const userAlreadyExists = this.usersRepository.findByEmail(email);
      if (!userAlreadyExists) {
        return this.usersRepository.create({ name, email });
      }
      throw new Error('email already in use');
    } catch (error) {
      throw new Error(`error creating user: ${error}`);
    }
  }
}

export { CreateUserUseCase };

import { Request, Response } from 'express';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({ user_id });

      if (user) {
        return response.status(200).json(user);
      } else {
        return response.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      return response.status(404).json({ error: error });
    }
  }
}

export { ShowUserProfileController };

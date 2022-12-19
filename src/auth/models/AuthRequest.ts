import { Request } from 'express';
import { User } from 'src/api/user/user.entity';

export interface AuthRequest extends Request {
  user: User;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailAlreadyExistsException } from './exceptions/EmailAlreadyExists.exception';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { NotFoundUserException } from './exceptions/NotFoundUser.exception';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async getUser(id: number): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });

    if (!user) throw new NotFoundUserException();
    return { ...user, password: undefined };
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const user: User = {
      ...body,
      password: await bcrypt.hash(body.password, 10),
    };

    const existingUser = await this.repository.find({
      where: { email: user.email },
    });

    if (existingUser.length !== 0) throw new EmailAlreadyExistsException();

    const createdUser = await this.repository.save(user);
    return { ...createdUser, password: undefined };
  }
}

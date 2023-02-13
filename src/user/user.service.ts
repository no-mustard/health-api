import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { UserRepository } from 'src/user/entity/user.repository';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: UserRepository,
	) {}

	findAll(): Promise<User[]> {
		return this.userRepository.find();
	}
}
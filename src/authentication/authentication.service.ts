import { HttpException } from '@nestjs/common';
import {UserService} from "../user/user.service";
import RegisterDto from "../user/dto/CreateUser.dto";
import * as bcrypt from 'bcrypt';

export class AuthenticationService{
	constructor(private readonly usersService:UserService) {
	}

	public async register(registrationData:RegisterDto) {
		const hashedPassword = await bcrypt.hash(registrationData.password, 10);
		try{
			const createdUser = await this.usersService.create({
				...registrationData,
				password : hashedPassword
			})
			createdUser.password = undefined;
		}catch (error){

		}
	}
}
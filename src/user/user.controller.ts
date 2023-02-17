import { Controller, Get } from '@nestjs/common';
import { UserResponseDto } from './dto/response.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}


}
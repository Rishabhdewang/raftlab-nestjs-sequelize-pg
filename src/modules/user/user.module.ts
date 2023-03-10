import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { usersProviders } from './user.provider';

@Module({
  providers: [UserService, ...usersProviders],
  controllers: [UserController],
})

export class UserModule { }
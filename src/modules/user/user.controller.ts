import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from "./user.service";
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: UserDto): Promise<User> {
      return this.userService.create(createUserDto);
    }
  
    @Get('/all')
    findall(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get('/by-email/:email')
    byemail(@Param('email') email: string) {
      return this.userService.findOneByEmail(email);
    }

    @Get('/by-id/:id')
    byId(@Param('id') id: number) {
      return this.userService.findOneById(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.userService.remove(id)
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }
}

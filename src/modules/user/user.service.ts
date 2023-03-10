import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UserService {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userModel: typeof User
    ) { }

    async create(userDTo: UserDto): Promise<User> {
        return await this.userModel.create<User>({ ...userDTo });
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.findAll<User>();
    }

    async findOneByEmail(email: string) {
        let user = await this.userModel.findOne({ where: { email } });
        return user;
    }

    async findOneById(id: number): Promise<User | null> {
        return await this.userModel.findOne<User>({ where: { id } });
    }

    async remove(id: number) {
        return await this.userModel.destroy({ where: { id } });
    }

    async update(id: number, data: object): Promise<object> {
        const [numberOfAffectedRows, [updatedPost]] = await this.userModel.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }
}
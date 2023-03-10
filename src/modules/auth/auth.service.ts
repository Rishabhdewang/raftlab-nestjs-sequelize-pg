import { Injectable } from "@nestjs/common";
// import { Sequelize } from 'sequelize-typescript';


@Injectable()

export class AuthService {
    // constructor(private sequelize: Sequelize) {}

    signup() {
        return { msg : "SERVICE: user signed up"}
    }
    
    signin() {
        return { msg : "SERVICE: user signed in"}
    }

 }
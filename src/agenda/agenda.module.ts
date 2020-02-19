import { Module } from '@nestjs/common';
import { CqrsModule, CommandHandler } from '@nestjs/cqrs';
import { AgendaController } from './controller/agenda.controller';
import { RoomBookService } from './services/room-book.service';
import { RoomRepository } from './repositories/room.repository';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/modules/shared/strategies/jwt.strategy';
import { AuthService } from 'src/modules/shared/services/auth.service';
import { AccountService } from 'src/modules/backoffice/services/account.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from 'src/modules/backoffice/schemas/customer.schema';
import { UserSchema } from 'src/modules/backoffice/schemas/user.schema';

@Module({
    imports:[
        CqrsModule,
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions:{
                expiresIn: 3600
            },
        }),
        MongooseModule.forFeature([
            {
                name: 'Customer',
                schema: CustomerSchema,
            },
            {
                name: 'User',
                schema: UserSchema,
            },
        ])
    ],
    controllers:[AgendaController],
    providers:[
        RoomBookService,
        RoomRepository,
        ...CommandHandlers,
        ...EventHandlers,
        AccountService,
        AuthService,
        JwtStrategy,
    ]
})
export class AgendaModule {}

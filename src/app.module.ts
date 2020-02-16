import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from 'src/modules/store/store.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'petshop_nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    BackofficeModule,
    StoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

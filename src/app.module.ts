import { Module } from '@nestjs/common';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bruno:Felipe25051992@cluster0-zo3no.azure.mongodb.net/petshop'),
    BackofficeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

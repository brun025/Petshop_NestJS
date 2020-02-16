import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());

  // Open API (Swagger)
  const options = new DocumentBuilder()
    .setTitle('Petshop API')
    .setDescription('API Petshop')
    .setVersion('1.0.0')
    .addTag('petshop')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
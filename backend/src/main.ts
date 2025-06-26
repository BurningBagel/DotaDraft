import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin:process.env.FRONTEND_URL,
    methods:'GET,POST,PUT,DELETE',
    credentials:true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

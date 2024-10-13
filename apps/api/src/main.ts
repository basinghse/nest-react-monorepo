import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // All backend requests wil be prefixed with /api
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

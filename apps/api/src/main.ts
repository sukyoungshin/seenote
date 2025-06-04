import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // 예: http://localhost:4000/api/...

  await app.listen(4000);
  console.log(`🚀 Server is running on http://localhost:4000`);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역 prefix 설정
  app.setGlobalPrefix('api'); // 예: http://localhost:4000/api/...

  // 전역 ValidationPipe 설정 (DTO 유효성 + transform 활성화)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // DTO에 정의되지 않은 속성 자동 제거
      forbidNonWhitelisted: true, // DTO에 없는 속성 보내면 요청 막음
    }),
  );

  await app.listen(4000);
  console.log(`🚀 Server is running on http://localhost:4000`);
}
bootstrap();

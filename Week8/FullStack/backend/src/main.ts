import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow the React frontend (running on port 5173) to talk to this backend
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  await app.listen(3000);
  console.log('Backend running on http://localhost:3000');
}
bootstrap();

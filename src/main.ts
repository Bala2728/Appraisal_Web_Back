import { NestFactory } from '@nestjs/core';
import{DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.enableCors();
  const option = new DocumentBuilder()
  .setTitle('Appraisal_Form')
  .setDescription('Api')
  .setVersion('1.1.0')
  .build()
  const document = SwaggerModule.createDocument(app,option);
  SwaggerModule.setup('Api',app,document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

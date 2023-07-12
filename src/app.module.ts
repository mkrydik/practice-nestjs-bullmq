import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { AppController } from './app.controller';
import { MyProcessor } from './my-processor';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'myQueue', // キュー名
    }),
  ],
  controllers: [AppController],
  providers: [MyProcessor, AppService],
})
export class AppModule {}

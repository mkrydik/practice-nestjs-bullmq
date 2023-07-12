import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private id = 0;

  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    this.id++;
    return await this.appService.addJob(this.id);
  }
}

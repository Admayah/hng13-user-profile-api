import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('me')
  async getCatFacts() {
    const fact = await lastValueFrom(this.appService.getCatFacts())
    const now = new Date();
    return {
      status: "success",
      user: {
        name: "Adebisi Mayowa",
        email: "mayobami49@gmail.com",
        stack: "Nestjs"
      },
      timestamp: now.toISOString(),
      fact
    }
  }
}

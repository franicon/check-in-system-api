import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller()
export class TimeController {
  constructor(private timeService: TimeService) {}

  @Get('/time')
  getCurrent() {
    return this.timeService.getToday();
  }
}

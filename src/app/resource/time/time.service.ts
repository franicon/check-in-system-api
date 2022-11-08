import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  private theTime = new Date();

  getToday() {
    return this.theTime;
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Config } from './app/Config';
import { TimeModule } from './app/resource/time/time.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [Config],
      isGlobal: true,
      expandVariables: true,
    }),
    TimeModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}

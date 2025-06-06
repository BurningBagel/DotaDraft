import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesService } from './heroes/heroes.service';
import { HeroesController } from './heroes/heroes.controller';

@Module({
  imports: [],
  controllers: [AppController, HeroesController],
  providers: [AppService, HeroesService],
})
export class AppModule {}

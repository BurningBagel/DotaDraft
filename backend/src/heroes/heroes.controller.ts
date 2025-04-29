import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from 'src/shared/models/hero.model';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get()
  getHeroes() {
    return this.heroesService.getHeroes();
  }

  @Get(':name')
  getSpecificHero(@Param('name') name: string): Hero {
    try {
        return this.heroesService.getSpecificHero(name);
        
    } catch (error) {
        throw new NotFoundException(`Hero ${name} not found!`)
    }
  }

  @Get('search')
  getHeroesByStrengths(@Query('strengths') traits: string[]): Hero[] {
    return this.heroesService.getHeroesByStrengths(traits);
  }
}

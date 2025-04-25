import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Hero } from 'shared/models/hero.model';

@Injectable()
export class HeroesService {
  private heroes: Hero[];

  constructor() {
    const filePath = path.join(process.cwd(), 'src','data','heroes.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    this.heroes = JSON.parse(fileContents);
  }

  getHeroes() {
    return this.heroes;
  }

  //searches through the list of heroes and returns true as soon as it finds one with the same name as the argument
  getSpecificHero(name: string): any {
    return this.heroes.find(
      (item) => String(item.name).toUpperCase() == name.toUpperCase(),
    );
  }

  //returns a filtered list of heroes, where each hero has at least 1 of the strengths sent inside traits
  getHeroesByStrengths(traits: string[]): Hero[] {
    return this.heroes.filter((hero) => {
      if (hero.strengths.some((strength) => traits.includes(strength)))
        return true;
    });
  }
}

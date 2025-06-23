import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { heroes } from 'src/data/heroes';
import { Attribute } from 'src/shared/enums/attribute.enum';
import { Hero } from 'src/shared/models/hero.model';

@Injectable()
export class HeroesService {
  private heroes: Hero[];

  constructor() {
    // const filePath = path.join(process.cwd(), 'src','data','heroes.json');
    // const fileContents = fs.readFileSync(filePath, 'utf-8');
    // this.heroes = JSON.parse(fileContents);
    this.heroes = heroes;
  }

  getHeroes() {
    console.log("received GET request! returning all heroes!")
    return this.heroes;
  }

  //searches through the list of heroes by name and returns the details of that hero, if it exists
  getSpecificHero(name: string): Hero {
     let i = this.heroes.findIndex(
      (item) => String(item.name).toUpperCase() == name.toUpperCase(),
    );
    if(i == -1){
      throw new Error(`SPECIFIC HERO NOT FOUND ${name}`);
    }

    return this.heroes[i];
  }

  //returns a filtered list of heroes, where each hero has at least 1 of the strengths sent inside traits
  getHeroesByStrengths(traits: string[]): Hero[] {
    return this.heroes.filter((hero) => {
      if (hero.strengths.some((strength) => traits.includes(strength)))
        return true;
    });
  }

  getHeroesByAttribute(attribute: Attribute) : Hero[]{
    return this.heroes.filter((hero) => {
      return hero.attribute === attribute;
    })
  }
}

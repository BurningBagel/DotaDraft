import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class HeroesService {
    private heroes: any[];

    constructor(){
        const filePath = path.join(__dirname,'../../src/data/heroes.json');
        console.log(filePath)
        const fileContents = fs.readFileSync(filePath,'utf-8');
        this.heroes = JSON.parse(fileContents);
    }

    getHeroes(){
        return this.heroes;
    }
}

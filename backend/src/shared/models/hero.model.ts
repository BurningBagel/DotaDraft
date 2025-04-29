import { Attribute } from '../enums/attribute.enum';

export interface Hero {
  name: string;
  attribute: Attribute;
  strengths: string[];
  weaknesses: string[];
}

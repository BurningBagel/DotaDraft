import { Attribute } from '../enums/attribute.enum';

export interface Hero {
  names: string[];
  attribute: Attribute;
  strengths: string[];
  weaknesses: string[];
}

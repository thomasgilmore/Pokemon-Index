export interface IPokemonCardDetrailsProps {
  title: string;
  attacks: Array<attackInfoArr>;
}

interface attackInfoArr {
  name: string;
  cost: Array<string>;
  convertedEnergyCost: number;
  damage: string;
  text: string;
}
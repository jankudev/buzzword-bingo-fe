export class BingoTile {
  text: string;
  selected ? = false;
}

export class Bingo {
  readonly cols = 5;
  readonly tiles: BingoTile[] = [
    {text: 'Agile'}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank test test test'},
    {text: 'Agile'}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    {text: 'Agile'}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    {text: 'Agile'}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    {text: 'Agile'}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'}
  ];
}

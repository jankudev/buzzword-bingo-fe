export class BingoTile {
  text: String;
  selected?: boolean = false;
}

export class Bingo {
  cols: Number = 5;
  tiles: BingoTile[] = [
    { text: "Agile"}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    { text: "Agile"}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    { text: "Agile"}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    { text: "Agile"}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'},
    { text: "Agile"}, {text: 'Scrum'}, {text: 'Craft'}, {text: 'DevOps'}, {text: 'Future bank'}
  ]
}

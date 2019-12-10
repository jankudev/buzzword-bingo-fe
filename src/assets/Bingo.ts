export const BUZZWORDS = [
  'Agile', 'Manifest', 'Transformace', 'Future Bank', 'Craft/Řemeslo', 'Scrum', 'Lean', 'DevOps', 'Team', 'Sprint', 'Kouč',
  'Mentor', 'Vize', 'Cloud', 'OpenShift', 'Azure', 'Standard', 'Hodnoty', 'Kvalita', 'Pragmatik', 'Standup', 'Waterfall',
  'Softwarové inženýrství', 'Silver bullet', 'Win/win', 'Customer journey', 'User experience', 'Buzzword', 'Inovace',
  'Rychleji/Rychlost', 'Millenial', 'Brainstorming', 'Workshop', 'Schůzka/Meeting', 'Roadmapa', 'Strategie', 'Rozvoj',
  'Synergie', 'Work-life balance', 'RACI matice', 'Kompetenční matice', 'One-to-one', 'Best practice', 'Fintech', 'Machine learning',
  'Data/Data science', 'Big data', 'Blockchain', 'Serverless', 'Specifikace', 'Internet of Thing', 'Kanban', 'Mikroslužby',
  'Test-driven development', 'CI/CD', 'Pipeline', 'Automatizace', 'Respekt', 'Spolupráce', 'Dobrá nálada', 'Radost', 'Odpovědnost',
  'Kultura', 'Spokojenost', 'Akceptační kritéria', 'Backlog', 'Iniciativa', 'Epic', 'User story', 'Poker/Planning poker',
  'Story pointy', 'Burndown', 'Rychlost', 'Retrospektiva', 'Task'];

export class BingoTile {
  text: string;
  selected ? = false;
  selectedWhen: Date = undefined;

  constructor(text: string) {
    this.text = text;
  }
}

export class Bingo {
  readonly cols = 5;
  tiles: BingoTile[];

  constructor() {
    this.tiles = this.randomize();
  }

  randomize() {
    const terms = [...BUZZWORDS];
    const n = this.cols * this.cols;
    const result: BingoTile[] = [];
    for (let i = 0; i < n; i++) {
      const idx = this.getRandomInt(terms.length);
      result.push(new BingoTile(terms[idx]));
      terms.splice(idx, 1);
    }
    return result;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

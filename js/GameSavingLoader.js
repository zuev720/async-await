import json from './json';
import read from './read';

export default class GameSavingLoader {
  constructor() {
    this.saveString = async () => json(await read());
  }

  async load() {
    try {
      const savingString = await this.saveString();
      return JSON.parse(savingString.toString());
    } catch (error) {
      return error;
    }
  }
}

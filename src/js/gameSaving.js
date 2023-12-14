import read from "./reader";
import json from "./parser";

export class GameSaving {
  static load() {
    const data = read(); // возвращается Promise!
    const value = data.then((resp) => json(resp)); // возвращается Promise!
    return value;
  }
}

export class GameSavingAsync {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data) // возвращается Promise!
    return value;
  }
}

import {GameSaving as GameSavingLoader, GameSavingAsync} from "./js/gameSaving";

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});

(async () => {
  try {
    const respons = await GameSavingAsync.load()
    console.log(respons)
  } catch (error) {
    console.log(error)
  }
})()

import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (err) {
    throw new Error(err);
  }
})();

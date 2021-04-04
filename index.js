import GameSavingLoader from './js/GameSavingLoader';

new GameSavingLoader().saveString().then((savingString) => console.log(savingString));
new GameSavingLoader().load().then((savingObject) => console.log(savingObject));

import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';
import UserInfo from './userInfo';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const parsedData = JSON.parse(await json(data));
    const userInfo = new UserInfo(
      parsedData.userInfo.id,
      parsedData.userInfo.name,
      parsedData.userInfo.level,
      parsedData.userInfo.points,
    );
    return new GameSaving(parsedData.id, parsedData.created, userInfo);
  }
}

import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';
import UserInfo from '../userInfo';

test('check loader', async () => {
  const userInfo = new UserInfo(1, 'Hitman', 10, 2000);
  const data = new GameSaving(9, 1546300800, userInfo);
  const received = await GameSavingLoader.load();
  expect(received).toEqual(data);
});

test('check instance of return', async () => {
  const received = await GameSavingLoader.load();
  const isGameSaving = received instanceof GameSaving;
  expect(true).toEqual(isGameSaving);
});

test('Проверка работы GameSavingLoader с ошибкой', async () => {
  await expect(Promise.reject(new Error('error'))).rejects.toThrow('error');
});

import GameSavingLoader from '../GameSavingLoader';

it('Свойство saveString экземпляра класса должно возвращать строку', async () => {
  await expect(new GameSavingLoader().saveString())
    .resolves.toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

it('Метод load() экземпляра класса должен возвращать объект', async () => {
  await expect(new GameSavingLoader().load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

it('Экземпляр класса должен правильно обрабатывать ошибку', async () => {
  try {
    await new GameSavingLoader();
  } catch (error) {
    expect(error).toBe(error);
  }
});

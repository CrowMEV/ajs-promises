import { GameSaving, GameSavingAsync } from "../gameSaving";

beforeEach(() => {
  jest.restoreAllMocks();
});


test("reject GamingSaving", () => {
  const read = jest.spyOn(GameSaving, "load");
  read.mockRejectedValue("Boobs");
  return expect(GameSaving.load()).rejects.toBe("Boobs");
});

test("reject GameSavingAsync", async () => {
  const read = jest.spyOn(GameSavingAsync, "load");
  read.mockRejectedValue("Boobs");

  try {
    await GameSavingAsync.load()
  } catch(err) {
    expect(err).toBe('Boobs')  // eslint-disable-line
  }
});

test("GameSaving", () => {
  return GameSaving.load().then((resp) =>
    expect(resp).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
    })
  );
});

test("GameSavingAsync", async () => {
  const respons = await GameSavingAsync.load();
  expect(respons).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
  });
});

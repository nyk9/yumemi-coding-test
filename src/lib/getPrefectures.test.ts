import { Prefectures, PrefecturesResponse } from "@/types/prefectures/prefectures";
import { getPrefectures, getPrefName } from "./getPrefectures";

describe("getPrefectures", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("データを正常に取得できる", async () => {
    const prefecuresList: PrefecturesResponse = {
      massage: null,
      result: [
        {
          prefCode: 1,
          prefName: "北海道"
        },
        {
          prefCode: 2,
          prefName: "青森県"
        }
      ]
    };
    fetchMock.mockResponseOnce(JSON.stringify(prefecuresList));

    const response = await getPrefectures();
    expect(response).toStrictEqual(prefecuresList);
  });

  test("データを取得できなかった場合", async () => {
    fetchMock.mockRejectOnce(new Error("API error"));

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const response = await getPrefectures();
    expect(response).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error:", new Error("API error"));

    consoleErrorSpy.mockRestore();
  });
});

describe("getPrefName", () => {
  const prefectures: Prefectures[] = [
    {
      prefCode: 1,
      prefName: "北海道"
    },
    {
      prefCode: 2,
      prefName: "青森県"
    }
  ];
  test("prefCodeがある場合", () => {
    expect(getPrefName(prefectures, 1)).toBe("北海道");
  });
  test("prefCodeがない場合", () => {
    expect(getPrefName(prefectures, 3)).toBe("");
  });
});

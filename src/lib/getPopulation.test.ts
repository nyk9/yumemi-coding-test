import { PopulationResponse } from "@/types/populations/populations";
import { getPopulation } from "./getPopulation";

describe("getPopulation", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("データを正常に取得できる", async () => {
    const prefecuresList: PopulationResponse[] = [
      {
        message: null,
        result: {
          boundaryYear: 2020,
          data: [
            {
              label: "北海道",
              data: [
                {
                  year: 2000,
                  value: 10000,
                  rate: 10
                },
                {
                  year: 2005,
                  value: 11000,
                  rate: 11
                }
              ]
            },
            {
              label: "北海道",
              data: [
                {
                  year: 2000,
                  value: 20000,
                  rate: 20
                },
                {
                  year: 2005,
                  value: 22000,
                  rate: 25
                }
              ]
            }
          ]
        }
      }
    ];
    fetchMock.mockResponseOnce(JSON.stringify(prefecuresList));

    const response = await getPopulation(1);
    expect(response).toStrictEqual(prefecuresList);
  });
  test("データを取得できなかった場合", async () => {
    fetchMock.mockRejectOnce(new Error("API error"));

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const response = await getPopulation(1);
    expect(response).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error:", new Error("API error"));

    consoleErrorSpy.mockRestore();
  });
});

import { PopulationResponse } from "@/types/populations/populations";

export async function getPopulation(prefCode: number) {
  try {
    const response: Promise<PopulationResponse> = await fetch(
      String(process.env.NEXT_PUBLIC_API_URL) +
        "/api/v1/population/composition/perYear?prefCode=" +
        String(prefCode),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "X-API-KEY": String(process.env.NEXT_PUBLIC_API_KEY),
          cache: "force-cache"
        }
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

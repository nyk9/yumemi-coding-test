import PageViewer from "@/components/elements/PageViewer/PageViewer";
import { getPopulation } from "@/lib/getPopulation";
import { getPrefectures } from "@/lib/getPrefectures";
import { PopulationResponse } from "@/types/populations/populations";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {
  const prefectures = await getPrefectures();
  if (typeof prefectures === "undefined") {
    return <></>;
  }
  const populations: PopulationResponse[] = [];

  for (let i = 0; i < prefectures.result.length; i++) {
    const population = await getPopulation(i + 1);
    if (population) {
      populations.push(population as PopulationResponse);
    }
  }
  return (
    <div className="items-center justify-items-center min-h-screen p-3 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback={<>loading</>}>
        {/* <PrefCheckboxes prefs={prefectures} populations={populations} /> */}
        <PageViewer prefs={prefectures} populations={populations} />
      </Suspense>
      {/* <PopulationLine populations={populations} prefectures={prefectures} /> */}
    </div>
  );
}

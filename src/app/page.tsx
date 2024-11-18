import { PrefCheckboxes } from "@/components/elements/PrefChecboxes/PrefCheckboxes";
import { getPrefectures } from "@/lib/getPrefectures";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const prefectures = await getPrefectures();
  return (
    <div className="items-center justify-items-center min-h-screen p-3 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Suspense fallback="loading">
        <PrefCheckboxes prefs={prefectures} />
      </Suspense>
    </div>
  );
}

"use clinet";

import { PrefecturesResponse } from "@/types/prefectures/prefectures";

export function PrefCheckboxes(data: {
  prefs: PrefecturesResponse | undefined;
}) {
    
  return (
    <div>
      <form className="flex flex-wrap ">
        {data.prefs?.result.map((pref) => {
            return (
                <label key={pref.prefCode} className="p-1 flex-row w-1/6">
                    <input type="checkbox" value={pref.prefCode} />
                    <span>
                        {pref.prefName}
                    </span>
                </label>
            )
        })}
      </form>
    </div>
  );
}

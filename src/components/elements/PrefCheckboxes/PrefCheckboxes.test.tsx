import { render, screen } from "@testing-library/react";
import { PrefCheckboxes } from "./PrefCheckboxes";
import { PrefecturesResponse } from "@/types/prefectures/prefectures";
import { userEvent } from "@testing-library/user-event";

const user = userEvent.setup();
const handleFunc = jest.fn();
const prefsResponse: PrefecturesResponse = {
  massage: null,
  result: [
    {
      prefCode: 1,
      prefName: "北海道"
    },
    {
      prefCode: 2,
      prefName: "青森県"
    },
    {
      prefCode: 3,
      prefName: "岩手県"
    }
  ]
};

describe("PrefCheckboxes.test.tsx", () => {
  beforeEach(() => {
    render(<PrefCheckboxes prefs={prefsResponse} handleFunc={handleFunc} />);
  });
  test("都道府県が正しくレンダリングされる", () => {
    expect(screen.getByLabelText("北海道")).toBeInTheDocument();
    expect(screen.getByLabelText("青森県")).toBeInTheDocument();
    expect(screen.getByLabelText("岩手県")).toBeInTheDocument();
  });

  test("チェックしたものが正しく反映される", async () => {
    await user.click(screen.getByLabelText("北海道"));
    expect(handleFunc).toHaveBeenCalledWith(1);
  });
});

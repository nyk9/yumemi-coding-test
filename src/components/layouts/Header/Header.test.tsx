import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("ヘッダーが正しくレンダリングされる", () => {
    render(<Header />);
    const header = screen.getByText("ゆめみ フロントエンド コーディングテスト課題");
    expect(header).toBeInTheDocument();
  });
});

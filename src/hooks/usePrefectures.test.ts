import { usePrefectures } from "./usePrefectures";
import { renderHook, cleanup } from "@testing-library/react";
import { act } from "react";

describe("usePrefectures", () => {
  afterEach(() => {
    cleanup();
  });
  test("1回チェックしたときの挙動", () => {
    const { result } = renderHook(() => usePrefectures());
    act(() => {
      result.current.handleCheckedPrefectures(1);
    });
    expect(result.current.checkedPrefectures).toStrictEqual([1]);
  });
  test("複数個を1回チェックしたときの挙動", () => {
    const { result } = renderHook(() => usePrefectures());
    act(() => {
      result.current.handleCheckedPrefectures(1);
    });
    act(() => {
      result.current.handleCheckedPrefectures(2);
    });
    act(() => {
      result.current.handleCheckedPrefectures(3);
    });
    expect(result.current.checkedPrefectures).toStrictEqual([1, 2, 3]);
  });
  test("2回クリックしたときの挙動", () => {
    const { result } = renderHook(() => usePrefectures());
    act(() => {
      result.current.handleCheckedPrefectures(1);
    });
    act(() => {
      result.current.handleCheckedPrefectures(1);
    });
    expect(result.current.checkedPrefectures).toStrictEqual([]);
  });
});

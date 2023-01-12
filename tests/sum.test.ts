import { expect, test } from "vitest";
import { sum } from "../src/helpers/sum";

test("sum function", () => {
    expect(sum(3, 1)).toBe(4);
});

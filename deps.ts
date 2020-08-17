export const test = Deno.test;
export { parse } from "https://deno.land/std@v0.65.0/flags/mod.ts";
export {
  green,
  yellow,
  red,
  blue,
  bold,
} from "https://deno.land/std@v0.65.0/fmt/colors.ts";
export {
  assert,
  assertEquals,
  assertThrows,
  assertThrowsAsync,
} from "https://deno.land/std@v0.65.0/testing/asserts.ts";

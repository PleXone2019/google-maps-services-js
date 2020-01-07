import { latLngToString, arrayToString, serializer, each } from "./serialize";
import { LatLngLiteral } from "./common";

test("latLngToString is correct", () => {
  expect(latLngToString("")).toBe("");
  expect(latLngToString("10,20")).toBe("10,20");
  expect(latLngToString([10, 20])).toBe("10,20");
  expect(latLngToString({ lat: 10, lng: 20 })).toBe("10,20");
  expect(latLngToString({ latitude: 10, longitude: 20 })).toBe("10,20");
  expect(() => {
    latLngToString({} as LatLngLiteral);
  }).toThrow(TypeError);
});

test("arrayToSTring is correct", () => {
  expect(arrayToString("|")([])).toBe("");
  expect(arrayToString("|")(["a"])).toBe("a");
  expect(arrayToString("|")(["a", "b"])).toBe("a|b");
  expect(arrayToString(",")(["a", "b"])).toBe("a,b");
  expect(arrayToString(",")("foo")).toBe("foo");
});

test("serializer", () => {
  expect(serializer({ quz: [] })({ foo: ["bar"] })).toBe("foo=bar");
  expect(
    serializer({ foo: [arrayToString("")] })({ foo: ["b", "a", "r"] })
  ).toBe("foo=bar");
  expect(
    serializer({ foo: [each(latLngToString), arrayToString("|")] })({
      foo: [
        [0, 1],
        [2, 3]
      ]
    })
  ).toBe("foo=0%2C1%7C2%2C3");
});

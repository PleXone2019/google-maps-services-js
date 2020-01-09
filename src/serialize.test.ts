import { latLngArrayToString, latLngToString, arrayToString, serializer, objectToString, latLngBoundsToString } from "./serialize";
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

test("latLngBoundsToString is correct", () => {
  expect(latLngBoundsToString("")).toBe("");
  expect(latLngBoundsToString({ southwest: { lat: 1, lng: 2 }, northeast: { lat: 3, lng: 4 } })).toBe("1,2|3,4");
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
    serializer({ foo: latLngArrayToString })({
      foo: [
        [0, 1],
        [2, 3]
      ]
    })
  ).toBe("foo=0%2C1%7C2%2C3");
});

test("objectToString", () => {
  expect(objectToString("|")("foo")).toBe("foo")
  expect(objectToString("|")({c: "c", a: "a", b: "b"})).toBe("a:a|b:b|c:c")
  expect(objectToString(",")({c: "c", a: "a", b: "b"})).toBe("a:a,b:b,c:c")

})
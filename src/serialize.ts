import { LatLng } from "./common";
import { stringify as qs } from "query-string";

export function latLngToString(o: LatLng) {
  if (typeof o === "string") {
    return o;
  } else if (Array.isArray(o) && o.length === 2) {
    // no transformation
  } else if ("lat" in o && "lng" in o) {
    o = [o.lat, o.lng];
  } else if ("latitude" in o && "longitude" in o) {
    o = [o.latitude, o.longitude];
  } else {
    throw new TypeError();
  }

  return o
    .map(x => {
      return x.toString();
    })
    .join(",");
}

export function arrayToString(sep: string) {
  return (o: string[] | string): string => {
    if (Array.isArray(o)) {
      return o.join(sep);
    } else {
      return o;
    }
  };
}
export function each(f) {
  return o => {
    return o.map(f);
  };
}

export function serializer(
  format: object,
  queryStringOptions: object = { arrayFormat: "brackets" }
) {
  return (params: object) => {
    Object.keys(format).forEach((key: string) => {
      if (key in params) {
        format[key].forEach(f => {
          params[key] = f(params[key]);
        });
      }
    });
    return qs(params, queryStringOptions);
  };
}

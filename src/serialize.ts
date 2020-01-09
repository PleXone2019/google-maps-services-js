import { LatLng, LatLngBounds } from "./common";
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

export function objectToString(sep: string = "|") {
  return (o: string | object): string => {
    if (typeof o === "string") {
      return o;
    } else {
      let keys = Object.keys(o);
      keys.sort();
      return keys.map((k) => k + ":" + o[k]).join(sep)
    }
  };
}

export function latLngBoundsToString(latLngBounds: string | LatLngBounds) {
  if (typeof latLngBounds === "string") {
    return latLngBounds;
  } else {
    return latLngToString(latLngBounds.southwest) + "|" + latLngToString(latLngBounds.northeast)
  }
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
        if (Array.isArray(format[key])) {
          format[key].forEach(f => {
            params[key] = f(params[key]);
          });
        } else {
          params[key] = format[key](params[key]);
        }
      }
    });
    return qs(params, queryStringOptions);
  };
}

export const latLngArrayToString = [each(latLngToString), arrayToString("|")];

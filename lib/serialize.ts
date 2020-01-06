import { LatLng } from "./common";
import {stringify as qs} from 'query-string';
export function latLng(o: LatLng) {
    if (typeof o === "string") {
        return o;
    } else if (Array.isArray(o)) {
        // no transformation
    }
    else if (o.hasOwnProperty('kind')) {
        switch (o.kind) {
            case "LatLngLiteral":
                o = [o.lat, o.lng];
                break;
            case "LatLngLiteralVerbose":
                o = [o.latitude, o.longitude];
                break
        }
    } else {
        throw new TypeError();
    }
    return o.map((x) => {x.toString()}).join(",");
}

export function join(sep: string) {
    return (o: string[] | string): string => {
        if (Array.isArray(o)) {
            return o.join(sep)
        } else {
            return o;
        }
    }
}

export function serialize(format: Map<string, (o: any)=> any>, queryStringOptions: object = {arrayFormat: 'brackets'}) {
    return (params: Map<string, any>) => {
        return qs(params, queryStringOptions)
    }
}
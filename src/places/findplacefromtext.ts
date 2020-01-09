import {
  Language,
  PlaceSearchResult,
  SearchResponseStatus
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer, arrayToString } from "../serialize";

export interface FindPlaceFromTextRequest extends AxiosRequestConfig {
  params?: {
    /** The text input specifying which place to search for (for example, a name, address, or phone number). */
    input: string;
    /** The type of input. This can be one of either `textquery` or `phonenumber`. */
    inputtype: "textquery" | "phonenumber";
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Searches are also biased to the selected language; results in the selected language may be given a higher ranking
     */
    language?: Language;
    /**
     * The fields specifying the types of place data to return.
     *
     * **Note:** If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.
     */
    fields?: Array<keyof PlaceSearchResult>;
    /**
     * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing
     * the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.
     */
    locationbias?: string;
  };
}

export interface FindPlaceFromTextResponse extends AxiosResponse {
  data:
  {
    status: SearchResponseStatus;
    error_message: string;
    /** A Find Place response contains only the data types that were specified using the fields parameter, plus `html_attributions`. */
    candidates: Array<Partial<PlaceSearchResult>>;
  };
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";

export const defaultParamsSerializer = serializer({
  fields: arrayToString("|")
});

export function findPlaceFromText(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = defaultParamsSerializer,
    ...config
  }: FindPlaceFromTextRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<FindPlaceFromTextResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<FindPlaceFromTextResponse>;
}

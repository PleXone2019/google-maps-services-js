import {
  PlacesRequest as PlaceSearchParams,
  PlaceSearchResponse as PlaceSearchResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface TextSearchRequest extends AxiosRequestConfig {
  params?: PlaceSearchParams;
}

export interface TextSearchResponse extends AxiosResponse {
  data: PlaceSearchResponseData;
}

export const textSearchUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";

export function textSearch(
  { params, method = "get", url = textSearchUrl, ...config }: TextSearchRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<TextSearchResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    TextSearchResponse
  >;
}

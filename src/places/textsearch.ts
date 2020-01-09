import {
  PlacesRequest as PlaceSearchParams,
  PlaceSearchResponse as PlaceSearchResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

export interface TextSearchRequest extends AxiosRequestConfig {
  params?: PlaceSearchParams;
}

export interface TextSearchResponse extends AxiosResponse {
  data: PlaceSearchResponseData;
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";

export function textSearch(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = serializer({}),
    ...config
  }: TextSearchRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<TextSearchResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<TextSearchResponse>;
}

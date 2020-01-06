import {
  FindPlaceRequest as FinePlaceFromTextParams,
  FindPlaceFromTextResponse as FindPlaceFromTextResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface FindPlaceFromTextRequest extends AxiosRequestConfig {
  params?: FinePlaceFromTextParams;
}

export interface FindPlaceFromTextResponse extends AxiosResponse {
  data: FindPlaceFromTextResponseData;
}

export const findPlaceFromTextUrl =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";

export function findPlaceFromText(
  {
    params,
    method = "get",
    url = findPlaceFromTextUrl,
    ...config
  }: FindPlaceFromTextRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<FindPlaceFromTextResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    FindPlaceFromTextResponse
  >;
}

import {
  PlaceDetailsRequest as PlaceDetailsParams,
  PlaceDetailsResponse as PlaceDetailsResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface PlaceDetailsRequest extends AxiosRequestConfig {
  params?: PlaceDetailsParams;
}

export interface PlaceDetailsResponse extends AxiosResponse {
  data: PlaceDetailsResponseData;
}

export const placeDetailsUrl =
  "https://maps.googleapis.com/maps/api/place/details/json";

export function placeDetails(
  {
    params,
    method = "get",
    url = placeDetailsUrl,
    ...config
  }: PlaceDetailsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlaceDetailsResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    PlaceDetailsResponse
  >;
}

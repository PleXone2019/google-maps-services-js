import {
  PlacesNearbyRequest as PlacesNearbyParams,
  PlaceSearchResponse as PlaceSearchResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface PlacesNearbyRequest extends AxiosRequestConfig {
  params?: PlacesNearbyParams;
}

export interface PlacesNearbyResponse extends AxiosResponse {
  data: PlaceSearchResponseData;
}

export const placesNearbyUrl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json";

export function placesNearby(
  {
    params,
    method = "get",
    url = placesNearbyUrl,
    ...config
  }: PlacesNearbyRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlacesNearbyResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    PlacesNearbyResponse
  >;
}

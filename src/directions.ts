import {
  DirectionsRequest as DirectionsParams,
  DirectionsResponse as DirectionsResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";
import { serializer, latLngArrayToString, arrayToString, latLngToString } from "./serialize";

export interface DirectionsRequest extends AxiosRequestConfig {
  params?: DirectionsParams;
}

export interface DirectionsResponse extends AxiosResponse {
  data: DirectionsResponseData;
}

export function directions(
  {
    params,
    method = "get",
    url = "https://maps.googleapis.com/maps/api/directions/json",
    paramsSerializer = serializer({
      origin: latLngToString,
      destination: latLngArrayToString,
      waypoints: latLngArrayToString,
      avoid: arrayToString("|"),
      transit_mode: arrayToString("|")
    }),
    ...config
  }: DirectionsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<DirectionsResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<DirectionsResponse>;
}

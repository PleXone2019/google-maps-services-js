import {
  DirectionsRequest as DirectionsParams,
  DirectionsResponse as DirectionsResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

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
    ...config
  }: DirectionsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<DirectionsResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    DirectionsResponse
  >;
}

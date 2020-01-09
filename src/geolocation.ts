import {
  GeolocationRequest as GeolocateParams,
  GeolocationResponse as GeolocateResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";
import { serializer } from "./serialize";

export interface GelocateRequest extends AxiosRequestConfig {
  params?: GeolocateParams;
}

export interface GeolocateResponse extends AxiosResponse {
  data: GeolocateResponseData;
}

export const defaultUrl =
  "https://www.googleapis.com/geolocation/v1/geolocate";

export const geolocateMethod = "post";

export function geolocate(
  {
    params,
    method = geolocateMethod,
    url = defaultUrl,
    paramsSerializer = serializer({}),
    ...config
  }: GelocateRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<GeolocateResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<GeolocateResponse>;
}

import {
  ElevationRequest as ElevationParams,
  ElevationResponse as ElevationResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";
import { latLngArrayToString, serializer } from "./serialize";

export interface ElevationRequest extends AxiosRequestConfig {
  params?: ElevationParams;
}

export interface ElevationResponse extends AxiosResponse {
  data: ElevationResponseData;
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/elevation/json";

export const defaultParamsSerializer = serializer({
  locations: latLngArrayToString
});

export function elevation(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = defaultParamsSerializer,
    ...config
  }: ElevationRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<ElevationResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<ElevationResponse>;
}

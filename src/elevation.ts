import {
  ElevationRequest as ElevationParams,
  ElevationResponse as ElevationResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";
import { latLngToString, arrayToString, each, serializer } from "./serialize";

export interface ElevationRequest extends AxiosRequestConfig {
  params?: ElevationParams;
}

export interface ElevationResponse extends AxiosResponse {
  data: ElevationResponseData;
}

export const elevationUrl =
  "https://maps.googleapis.com/maps/api/elevation/json";

export const defaultParamsSerializer = serializer({
  locations: [each(latLngToString), arrayToString("|")]
});

export function elevation(
  {
    params,
    method = "get",
    url = elevationUrl,
    paramsSerializer = defaultParamsSerializer,
    ...config
  }: ElevationRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<ElevationResponse> {
  console.log(axiosInstance)
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<ElevationResponse>;
}

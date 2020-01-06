import {
  DistanceMatrixRequest as DistanceMatrixParams,
  DistanceMatrixResponse as DistanceMatrixResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

export interface DistanceMatrixRequest extends AxiosRequestConfig {
  params?: DistanceMatrixParams;
}

export interface DistanceMatrixResponse extends AxiosResponse {
  data: DistanceMatrixResponseData;
}

export const distanceUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json";
export function timezone(
  {
    params,
    method = "get",
    url = distanceUrl,
    ...config
  }: DistanceMatrixRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<DistanceMatrixResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    DistanceMatrixResponse
  >;
}

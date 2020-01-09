import {
  DistanceMatrixRequest as DistanceMatrixParams,
  DistanceMatrixResponse as DistanceMatrixResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";
import { serializer, latLngArrayToString } from "./serialize";

export interface DistanceMatrixRequest extends AxiosRequestConfig {
  params?: DistanceMatrixParams;
}

export interface DistanceMatrixResponse extends AxiosResponse {
  data: DistanceMatrixResponseData;
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json";
export function timezone(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = serializer({ origins: latLngArrayToString, destinations: latLngArrayToString }),
    ...config
  }: DistanceMatrixRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<DistanceMatrixResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<DistanceMatrixResponse>;
}

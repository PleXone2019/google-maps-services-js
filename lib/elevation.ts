import {
  ElevationRequest as ElevationParams,
  ElevationResponse as ElevationResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

export interface ElevationRequest extends AxiosRequestConfig {
  params?: ElevationParams;
}

export interface ElevationResponse extends AxiosResponse {
  data: ElevationResponseData;
}

export const elevationUrl =
  "https://maps.googleapis.com/maps/api/distancematrix/json";
export function timezone(
  { params, method = "get", url = elevationUrl, ...config }: ElevationRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<ElevationResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    ElevationResponse
  >;
}

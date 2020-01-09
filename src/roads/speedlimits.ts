import {
  SpeedLimitsRequest as SpeedLimitsParams,
  SpeedLimitsResponse as SpeedLimitsResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

export interface SpeedLimitsRequest extends AxiosRequestConfig {
  params?: SpeedLimitsParams;
}

export interface SpeedLimitsResponse extends AxiosResponse {
  data: SpeedLimitsResponseData;
}

export function speedLimits(
  {
    params,
    method = "get",
    url = "https://roads.googleapis.com/v1/speedLimits",
    paramsSerializer = serializer({}),
    ...config
  }: SpeedLimitsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<SpeedLimitsResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<SpeedLimitsResponse>;
}

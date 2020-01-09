import {
  SnapToRoadsRequest as SnapToRoadsParams,
  SnapToRoadsResponse as SnapToRoadsResponseData,
  SpeedLimitsRequest as SpeedLimitsParams,
  SpeedLimitsResponse as SpeedLimitsResponseData,
  NearestRoadsRequest as NearestRoadsParams,
  NearestRoadsResponse as NearestRoadsResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

export interface SnapToRoadsRequest extends AxiosRequestConfig {
  params?: SnapToRoadsParams;
}

export interface SnapToRoadsResponse extends AxiosResponse {
  data: SnapToRoadsResponseData;
}

export function snapToRoads(
  {
    params,
    method = "get",
    url = "https://roads.googleapis.com/v1/snapToRoads",
    paramsSerializer = serializer({}),
    ...config
  }: SnapToRoadsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<SnapToRoadsResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<SnapToRoadsResponse>;
}

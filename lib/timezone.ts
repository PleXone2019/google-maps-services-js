import {
  TimeZoneRequest as TimeZoneParams,
  TimeZoneResponse as TimeZoneResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

export interface TimeZoneRequest extends AxiosRequestConfig {
  params?: TimeZoneParams;
}

export interface TimeZoneResponse extends AxiosResponse {
  data: TimeZoneResponseData;
}

export function timezone(
  {
    params,
    method = "get",
    url = "https://maps.googleapis.com/maps/api/timezone/json",
    ...config
  }: TimeZoneRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<TimeZoneResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    TimeZoneResponse
  >;
}

import {
  SnapToRoadsRequest as SnapToRoadsParams,
  SnapToRoadsResponse as SnapToRoadsResponseData,
  SpeedLimitsRequest as SpeedLimitsParams,
  SpeedLimitsResponse as SpeedLimitsResponseData,
  NearestRoadsRequest as NearestRoadsParams,
  NearestRoadsResponse as NearestRoadsResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

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
    ...config
  }: SpeedLimitsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<SpeedLimitsResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    SpeedLimitsResponse
  >;
}

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
    ...config
  }: SnapToRoadsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<SnapToRoadsResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    SnapToRoadsResponse
  >;
}

export interface NearestRoadsRequest extends AxiosRequestConfig {
  params?: NearestRoadsParams;
}

export interface NearestRoadsResponse extends AxiosResponse {
  data: NearestRoadsResponseData;
}

export function nearestRoads(
  {
    params,
    method = "get",
    url = "https://roads.googleapis.com/v1/nearestRoads",
    ...config
  }: NearestRoadsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<NearestRoadsResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    NearestRoadsResponse
  >;
}

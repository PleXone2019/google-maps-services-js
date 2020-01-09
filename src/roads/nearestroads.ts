import {
  NearestRoadsRequest as NearestRoadsParams,
  NearestRoadsResponse as NearestRoadsResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

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
    paramsSerializer = serializer({}),
    ...config
  }: NearestRoadsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<NearestRoadsResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<NearestRoadsResponse>;
}

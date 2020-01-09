import {
  PlacePhotoRequest as PlacePhotoParams,
  PlacePhotoResponse as PlacePhotoResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

export interface PlacePhotoRequest extends AxiosRequestConfig {
  params?: PlacePhotoParams;
}

export interface PlacePhotoResponse extends AxiosResponse {
  data: PlacePhotoResponseData;
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/place/photo/json";

export function placePhoto(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = serializer({}),
    ...config
  }: PlacePhotoRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlacePhotoResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<PlacePhotoResponse>;
}

import {
  PlacePhotoRequest as PlacePhotoParams,
  PlacePhotoResponse as PlacePhotoResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface PlacePhotoRequest extends AxiosRequestConfig {
  params?: PlacePhotoParams;
}

export interface PlacePhotoResponse extends AxiosResponse {
  data: PlacePhotoResponseData;
}

export const placePhotoUrl =
  "https://maps.googleapis.com/maps/api/place/photo/json";

export function placePhoto(
  { params, method = "get", url = placePhotoUrl, ...config }: PlacePhotoRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlacePhotoResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    PlacePhotoResponse
  >;
}

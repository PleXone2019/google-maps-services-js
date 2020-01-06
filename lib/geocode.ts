import {
  GeocodingRequest as GeocodeParams,
  GeocodingResponse as GeocodeResponseData,
  ReverseGeocodingRequest as ReverseGeocodeParams,
  ReverseGeocodingResponse as ReverseGeocodeResponseData
} from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

export const geocodeUrl = "https://www.googleapis.com/geolocation/v1/geolocate";

export interface GeocodeRequest extends AxiosRequestConfig {
  params?: GeocodeParams;
}

export interface GeocodeResponse extends AxiosResponse {
  data: GeocodeResponseData;
}

export function geocode(
  { data, method = "post", url = geocodeUrl, ...config }: GeocodeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<GeocodeResponse> {
  return axiosInstance({ data, method, url, ...config }) as Promise<
    GeocodeResponse
  >;
}

export interface ReverseGeocodeRequest extends AxiosRequestConfig {
  params?: ReverseGeocodeParams;
}

export interface ReverseGeocodeResponse extends AxiosResponse {
  data: ReverseGeocodeResponseData;
}

export function reverseGeocode(
  { data, method = "post", url = geocodeUrl, ...config }: GeocodeRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<GeocodeResponse> {
  return axiosInstance({ data, method, url, ...config }) as Promise<
    GeocodeResponse
  >;
}

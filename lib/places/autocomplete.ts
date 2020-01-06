import {
  PlaceAutocompleteRequest as PlaceAutocompleteParams,
  PlaceAutocompleteResponse as PlaceAutocompleteResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface PlaceAutocompleteRequest extends AxiosRequestConfig {
  params?: PlaceAutocompleteParams;
}

export interface PlaceAutocompleteResponse extends AxiosResponse {
  data: PlaceAutocompleteResponseData;
}

export const placeAutocompleteUrl =
  "https://maps.googleapis.com/maps/api/place/placesautocomplete/json";

export function placeAutocomplete(
  {
    params,
    method = "get",
    url = placeAutocompleteUrl,
    ...config
  }: PlaceAutocompleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlaceAutocompleteResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    PlaceAutocompleteResponse
  >;
}

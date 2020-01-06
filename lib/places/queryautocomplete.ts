import {
  QueryAutocompleteRequest as PlaceQueryAutocompleteParams,
  QueryAutocompleteResponse as PlaceQueryAutocompleteResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";

export interface PlaceQueryAutocompleteRequest extends AxiosRequestConfig {
  params?: PlaceQueryAutocompleteParams;
}

export interface PlaceQueryAutocompleteResponse extends AxiosResponse {
  data: PlaceQueryAutocompleteResponseData;
}

export const placeAutocompleteUrl =
  "https://maps.googleapis.com/maps/api/place/queryautocomplete/json";

export function placeQueryAutocomplete(
  {
    params,
    method = "get",
    url = placeAutocompleteUrl,
    ...config
  }: PlaceQueryAutocompleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlaceQueryAutocompleteResponse> {
  return axiosInstance({ params, method, url, ...config }) as Promise<
    PlaceQueryAutocompleteResponse
  >;
}

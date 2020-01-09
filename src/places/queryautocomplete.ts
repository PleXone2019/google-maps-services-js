import {
  QueryAutocompleteRequest as PlaceQueryAutocompleteParams,
  QueryAutocompleteResponse as PlaceQueryAutocompleteResponseData
} from "../common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";

export interface PlaceQueryAutocompleteRequest extends AxiosRequestConfig {
  params?: PlaceQueryAutocompleteParams;
}

export interface PlaceQueryAutocompleteResponse extends AxiosResponse {
  data: PlaceQueryAutocompleteResponseData;
}

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/place/queryautocomplete/json";

export function placeQueryAutocomplete(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = serializer({}),
    ...config
  }: PlaceQueryAutocompleteRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlaceQueryAutocompleteResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<PlaceQueryAutocompleteResponse>;
}

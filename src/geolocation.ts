import { RadioType, CellTower, WifiAccessPoint, LatLngLiteral } from "./common";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { defaultAxiosInstance } from "./defaults";

export interface GeolocateOptions {
  /** The mobile country code (MCC) for the device's home network. */
  homeMobileCountryCode?: number;
  /** The mobile network code (MNC) for the device's home network. */
  homeMobileNetworkCode?: number;
  /** The mobile radio type. While this field is optional, it should be included if a value is available, for more accurate results. */
  radioType?: RadioType;
  /** The carrier name. */
  carrier?: string;
  /**
   * Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available.
   * Defaults to `true`. Set `considerIp` to `false` to disable fall back.
   */
  considerIp?: boolean;
  /** An array of cell tower objects. */
  cellTowers?: CellTower[];
  /** An array of WiFi access point objects. */
  wifiAccessPoints?: WifiAccessPoint[];
}

export interface GeolocationResponse extends AxiosResponse {
  data: {
    /** The user's estimated latitude and longitude, in degrees. Contains one `lat` and one `lng` subfield. */
    location: LatLngLiteral;
    /** The accuracy of the estimated location, in meters. This represents the radius of a circle around the given location. */
    accuracy: number;
  };
}

export const geolocateUrl =
  "https://www.googleapis.com/geolocation/v1/geolocate";

export const geolocateMethod = "post";

export function geolocate(
  options: GeolocateOptions,
  axiosConfig: AxiosRequestConfig = {
    method: geolocateMethod,
    url: geolocateUrl
  },
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<GeolocationResponse> {
  axiosConfig.data = options;

  return axiosInstance(axiosConfig) as Promise<GeolocationResponse>;
}

import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import {
  AddressComponent,
  AddressGeometry,
  AddressType,
  Language,
  OpeningHours,
  PlusCode,
  ResponseData
} from "../common";
import { defaultAxiosInstance } from "../defaults";
import { serializer } from "../serialize";
import { PlaceFields, PlacePhoto, PlaceReview } from "./common";

export interface PlaceDetailsRequest extends AxiosRequestConfig {
  params?: {
    /** A textual identifier that uniquely identifies a place, returned from a Place Search. */
    place_id: string;
    /**
     * The language code, indicating in which language the results should be returned, if possible.
     * Note that some fields may not be available in the requested language.
     * Note that we often update supported languages so this list may not be exhaustive.
     */
    language?: Language;
    /**
     * The region code, specified as a ccTLD (country code top-level domain) two-character value.
     * Most ccTLD codes are identical to ISO 3166-1 codes, with some exceptions.
     * This parameter will only influence, not fully restrict, results.
     * If more relevant results exist outside of the specified region, they may be included.
     * When this parameter is used, the country name is omitted from the resulting `formatted_address`
     * for results in the specified region.
     */
    region?: string;
    /**
     * A random string which identifies an autocomplete session for billing purposes.
     * Use this for Place Details requests that are called following an autocomplete request in the same user session
     */
    sessionToken?: string;
    /**
     * One or more fields, specifying the types of place data to return, separated by a comma.
     *
     * **Warning: If you do not specify at least one field with a request, or if you omit the **fields**
     * parameter from a request, ALL possible fields will be returned, and you will be billed accordingly.
     * This applies only to Place Details requests.
     */
    fields?: PlaceFields[];
  };
}
export interface PlaceDetailsResponseData extends ResponseData {
  result: {
    /**
     * is an array containing the separate components applicable to this address.
     *
     * Note the following facts about the `address_components[]` array:
     *  - The array of address components may contain more components than the `formatted_address`.
     *  - The array does not necessarily include all the political entities that contain an address,
     *    apart from those included in the `formatted_address`. To retrieve all the political entities
     *    that contain a specific address, you should use reverse geocoding, passing the latitude/longitude
     *    of the address as a parameter to the request.
     *  - The format of the response is not guaranteed to remain the same between requests.
     *    In particular, the number of `address_components` varies based on the address requested
     *    and can change over time for the same address. A component can change position in the array.
     *    The type of the component can change. A particular component may be missing in a later response.
     */
    address_components: AddressComponent[];
    /**
     * is a string containing the human-readable address of this place.
     *
     * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom,
     * do not allow distribution of true postal addresses due to licensing restrictions.
     *
     * The formatted address is logically composed of one or more address components.
     * For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111"
     * (the street number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
     *
     * Do not parse the formatted address programmatically. Instead you should use the individual address components,
     * which the API response includes in addition to the formatted address field.
     */
    formatted_address: string;
    /**
     * contains the place's phone number in its local format.
     * For example, the `formatted_phone_number` for Google's Sydney, Australia office is `(02) 9374 4000`.
     */
    formatted_phone_number: string;
    /** is a representation of the place's address in the [adr microformat](http://microformats.org/wiki/adr). */
    adr_address: string;
    /**
     * contains the following information:
     *  - `location`: contains the geocoded latitude,longitude value for this place.
     *  - `viewport`: contains the preferred viewport when displaying this place on a map as a `LatLngBounds` if it is known.
     */
    geometry: AddressGeometry;
    /**
     * is an encoded location reference, derived from latitude and longitude coordinates, that represents an area:
     * 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller.
     * Plus codes can be used as a replacement for street addresses in places where they do not exist
     * (where buildings are not numbered or streets are not named).
     *
     * The plus code is formatted as a global code and a compound code:
     *  - `global_code` is a 4 character area code and 6 character or longer local code (849VCWC8+R9).
     *  - `compound_code` is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA).
     *
     * Typically, both the global code and compound code are returned.
     * However, if the result is in a remote location (for example, an ocean or desert) only the global code may be returned.
     *
     * @see [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)
     * @see [plus codes](https://plus.codes/)
     */
    plus_code: PlusCode;
    /** contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map. */
    icon: string;
    /**
     * contains the place's phone number in international format.
     * International format includes the country code, and is prefixed with the plus (+) sign.
     * For example, the `international_phone_number` for Google's Sydney, Australia office is `+61 2 9374 4000`.
     */
    international_phone_number: string;
    /**
     * contains the human-readable name for the returned result.
     * For establishment results, this is usually the canonicalized business name.
     */
    name: string;
    /** place opening hours. */
    opening_hours: OpeningHours;
    /**
     * is a boolean flag indicating whether the place has permanently shut down (value `true`).
     * If the place is not permanently closed, the flag is absent from the response.
     */
    permanently_closed: boolean;
    /**
     * an array of photo objects, each containing a reference to an image.
     * A Place Details request may return up to ten photos.
     * More information about place photos and how you can use the images in your application can be found in the Place Photos documentation.
     */
    photos: PlacePhoto[];
    /**
     * A textual identifier that uniquely identifies a place.
     * To retrieve information about the place, pass this identifier in the `placeId` field of a Places API request.
     */
    place_id: string;
    /**
     * The price level of the place, on a scale of 0 to 4.
     * The exact amount indicated by a specific value will vary from region to region.
     *
     * Price levels are interpreted as follows:
     *  - `0`: Free
     *  - `1`: Inexpensive
     *  - `2`: Moderate
     *  - `3`: Expensive
     *  - `4`: Very Expensive
     */
    price_level: number;
    /** contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews. */
    rating: number;
    /**
     * a JSON array of up to five reviews. If a `language` parameter was specified in the Place Details request,
     * the Places Service will bias the results to prefer reviews written in that language.
     */
    reviews: PlaceReview[];
    /**
     * contains an array of feature types describing the given result.
     * XML responses include multiple `<type>` elements if more than one type is assigned to the result.
     */
    types: AddressType[];
    /**
     * contains the URL of the official Google page for this place.
     * This will be the Google-owned page that contains the best available information about the place.
     * Applications must link to or embed this page on any screen that shows detailed results about the place to the user.
     */
    url: string;
    /**
     * contains the number of minutes this place’s current timezone is offset from UTC.
     * For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC),
     * and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC).
     */
    utc_offset: number;
    /**
     * lists a simplified address for the place, including the street name, street number, and locality,
     * but not the province/state, postal code, or country. For example, Google's Sydney, Australia office
     * has a `vicinity` value of `48 Pirrama Road, Pyrmont`.
     */
    vicinity: string;
    /** lists the authoritative website for this place, such as a business' homepage. */
    website: string;
  };
  /** contains a set of attributions about this listing which must be displayed to the user. */
  html_attributions: string[];
}

export interface PlaceDetailsResponse extends AxiosResponse {
  data: PlaceDetailsResponseData;
}

/**
 * The `"status"` field within the place response object contains the status of the request,
 * and may contain debugging information to help you track down why the place request failed
 */
export type PlaceDetailsResponseStatus =
  /** indicates that no errors occurred; the place was successfully detected and at least one result was returned. */
  | "OK"
  /** indicates a server-side error; trying again may be successful. */
  | "UNKNOWN_ERROR"
  /**
   * indicates that the referenced location (place_id) was valid but no longer refers to a valid result.
   * This may occur if the establishment is no longer in business.
   */
  | "ZERO_RESULTS"
  /**
   * indicates any of the following:
   *  - You have exceeded the QPS limits.
   *  - The request is missing an API key.
   *  - Billing has not been enabled on your account.
   *  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
   *  - The provided method of payment is no longer valid (for example, a credit card has expired).
   * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information
   * about how to resolve this error.
   */
  | "OVER_QUERY_LIMIT"
  /** indicates that your request was denied, generally because an invalid key parameter. */
  | "REQUEST_DENIED"
  /** generally indicates that the query (place_id) is missing. */
  | "INVALID_REQUEST"
  /** indicates that the referenced location (place_id) was not found in the Places database. */
  | "NOT_FOUND";

export const defaultUrl =
  "https://maps.googleapis.com/maps/api/place/details/json";

export const defaultParamsSerializer = serializer({});

export function placeDetails(
  {
    params,
    method = "get",
    url = defaultUrl,
    paramsSerializer = defaultParamsSerializer,
    ...config
  }: PlaceDetailsRequest,
  axiosInstance: AxiosInstance = defaultAxiosInstance
): Promise<PlaceDetailsResponse> {
  return axiosInstance({
    params,
    method,
    url,
    paramsSerializer,
    ...config
  }) as Promise<PlaceDetailsResponse>;
}

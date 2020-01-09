import {
  AddressComponent,
  AddressGeometry,
  AddressType,
  PlusCode,
  ResponseData
} from "../common";

export interface GeocodingResult {
  /**
   * array indicates the type of the returned result.
   * This array contains a set of zero or more tags identifying the type of feature returned in the result.
   * For example, a geocode of "Chicago" returns "locality" which indicates that "Chicago" is a city,
   * and also returns "political" which indicates it is a political entity.
   */
  types: AddressType[];
  /**
   * is a string containing the human-readable address of this location.
   *
   * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom,
   * do not allow distribution of true postal addresses due to licensing restrictions.
   *
   * The formatted address is logically composed of one or more address components.
   * For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street number),
   * "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
   *
   * Do not parse the formatted address programmatically. Instead you should use the individual address components,
   * which the API response includes in addition to the formatted address field.
   */
  formatted_address: string;
  /**
   * is an array containing the separate components applicable to this address.
   *
   * Note the following facts about the `address_components[]` array:
   *  - The array of address components may contain more components than the `formatted_address`.
   *  - The array does not necessarily include all the political entities that contain an address,
   *    apart from those included in the `formatted_address`. To retrieve all the political entities that contain a specific address,
   *    you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request.
   *  - The format of the response is not guaranteed to remain the same between requests.
   *    In particular, the number of `address_components` varies based on the address requested and can change
   *    over time for the same address. A component can change position in the array.
   *    The type of the component can change. A particular component may be missing in a later response.
   */
  address_components: AddressComponent[];
  /**
   * is an array denoting all the localities contained in a postal code.
   * This is only present when the result is a postal code that contains multiple localities.
   */
  postcode_localities: string[];
  /** address geometry. */
  geometry: AddressGeometry;
  /**
   * is an encoded location reference, derived from latitude and longitude coordinates,
   * that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller.
   * Plus codes can be used as a replacement for street addresses in places where they do not exist
   * (where buildings are not numbered or streets are not named).
   *
   * The plus code is formatted as a global code and a compound code:
   *  - `global_code` is a 4 character area code and 6 character or longer local code (849VCWC8+R9).
   *  - `compound_code` is a 6 character or longer local code with an explicit location (CWC8+R9, Mountain View, CA, USA).
   * Typically, both the global code and compound code are returned. However, if the result is in a remote location
   * (for example, an ocean or desert) only the global code may be returned.
   *
   * @see [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)
   * @see [plus codes](https://plus.codes/)
   */
  plus_code: PlusCode;
  /**
   * indicates that the geocoder did not return an exact match for the original request,
   * though it was able to match part of the requested address.
   * You may wish to examine the original request for misspellings and/or an incomplete address.
   *
   * Partial matches most often occur for street addresses that do not exist within the locality you pass in the request.
   * Partial matches may also be returned when a request matches two or more locations in the same locality.
   * For example, "21 Henr St, Bristol, UK" will return a partial match for both Henry Street and Henrietta Street.
   * Note that if a request includes a misspelled address component, the geocoding service may suggest an alternative address.
   * Suggestions triggered in this way will also be marked as a partial match.
   */
  partial_match: boolean;
  /** is a unique identifier that can be used with other Google APIs. */
  place_id: string;
}

export interface GeocodeResponseData extends ResponseData {
  /**
      * contains an array of geocoded address information and geometry information.
      *
      * Generally, only one entry in the `"results"` array is returned for address lookups,though the geocoder may return several results
      * when address queries are ambiguous.
      */
     results: GeocodingResult[];

 }
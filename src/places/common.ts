export type PlaceFields =
  | "address_component"
  | "adr_address"
  | "alt_id"
  | "formatted_address"
  | "geometry"
  | "icon"
  | "id"
  | "name"
  | "permanently_closed"
  | "photo"
  | "place_id"
  | "plus_code"
  | "scope"
  | "type"
  | "url"
  | "user_ratings_total"
  | "utc_offset"
  | "vicinity"
  | "formatted_phone_number"
  | "international_phone_number"
  | "opening_hours"
  | "website"
  | "price_level"
  | "rating"
  | "review";

export interface PlacePhoto {
  /** a string used to identify the photo when you perform a Photo request. */
  photo_reference: string;
  /** the maximum height of the image. */
  height: number;
  /** the maximum width of the image. */
  width: number;
  /** contains any required attributions. This field will always be present, but may be empty. */
  html_attributions: string[];
}

export type PlaceIdScope =
  /**
   * The place ID is recognised by your application only.
   * This is because your application added the place, and the place has not yet passed the moderation process.
   */
  | "APP"
  /** The place ID is available to other applications and on Google Maps. */
  | "GOOGLE";

export interface AlternativePlaceId {
  /**
   * The most likely reason for a place to have an alternative place ID is if your application adds a place and receives
   * an application-scoped place ID, then later receives a Google-scoped place ID after passing the moderation process.
   */
  place_id: string;
  /**
   * The scope of an alternative place ID will always be `APP`,
   * indicating that the alternative place ID is recognised by your application only.
   */
  scope: "APP";
}

/**
 * Table 1: Types supported in place search and addition
 *
 * You can use the following values in the types filter for place searches and when adding a place.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table1
 */
export type PlaceType1 =
  | "accounting"
  | "airport"
  | "amusement_park"
  | "aquarium"
  | "art_gallery"
  | "atm"
  | "bakery"
  | "bank"
  | "bar"
  | "beauty_salon"
  | "bicycle_store"
  | "book_store"
  | "bowling_alley"
  | "bus_station"
  | "cafe"
  | "campground"
  | "car_dealer"
  | "car_rental"
  | "car_repair"
  | "car_wash"
  | "casino"
  | "cemetery"
  | "church"
  | "city_hall"
  | "clothing_store"
  | "convenience_store"
  | "courthouse"
  | "dentist"
  | "department_store"
  | "doctor"
  | "electrician"
  | "electronics_store"
  | "embassy"
  | "fire_station"
  | "florist"
  | "funeral_home"
  | "furniture_store"
  | "gas_station"
  | "gym"
  | "hair_care"
  | "hardware_store"
  | "hindu_temple"
  | "home_goods_store"
  | "hospital"
  | "insurance_agency"
  | "jewelry_store"
  | "laundry"
  | "lawyer"
  | "library"
  | "liquor_store"
  | "local_government_office"
  | "locksmith"
  | "lodging"
  | "meal_delivery"
  | "meal_takeaway"
  | "mosque"
  | "movie_rental"
  | "movie_theater"
  | "moving_company"
  | "museum"
  | "night_club"
  | "painter"
  | "park"
  | "parking"
  | "pet_store"
  | "pharmacy"
  | "physiotherapist"
  | "plumber"
  | "police"
  | "post_office"
  | "real_estate_agency"
  | "restaurant"
  | "roofing_contractor"
  | "rv_park"
  | "school"
  | "shoe_store"
  | "shopping_mall"
  | "spa"
  | "stadium"
  | "storage"
  | "store"
  | "subway_station"
  | "supermarket"
  | "synagogue"
  | "taxi_stand"
  | "train_station"
  | "transit_station"
  | "travel_agency"
  | "veterinary_care"
  | "zoo";

/**
 * Table 2: Additional types returned by the Places service
 *
 * The following types may be returned in the results of a place search, in addition to the types in table 1 above.
 * For more details on these types, refer to [Address Types](https://developers.google.com/maps/documentation/geocoding/intro#Types)
 * in Geocoding Responses.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table2
 */
export type PlaceType2 =
  | "administrative_area_level_1"
  | "administrative_area_level_2"
  | "administrative_area_level_3"
  | "administrative_area_level_4"
  | "administrative_area_level_5"
  | "colloquial_area"
  | "country"
  | "establishment"
  | "finance"
  | "floor"
  | "food"
  | "general_contractor"
  | "geocode"
  | "health"
  | "intersection"
  | "locality"
  | "natural_feature"
  | "neighborhood"
  | "place_of_worship"
  | "political"
  | "point_of_interest"
  | "post_box"
  | "postal_code"
  | "postal_code_prefix"
  | "postal_code_suffix"
  | "postal_town"
  | "premise"
  | "room"
  | "route"
  | "street_address"
  | "street_number"
  | "sublocality"
  | "sublocality_level_4"
  | "sublocality_level_5"
  | "sublocality_level_3"
  | "sublocality_level_2"
  | "sublocality_level_1"
  | "subpremise";

export interface PlaceReview {
  /**
   * contains a collection of `AspectRating` objects, each of which provides a rating of a single attribute of the establishment.
   * The first object in the collection is considered the primary aspect.
   */
  aspects: AspectRating[];
  /** the name of the user who submitted the review. Anonymous reviews are attributed to "A Google user". */
  author_name: string;
  /** the URL to the user's Google Maps Local Guides profile, if available. */
  author_url?: string;
  /**
   * an IETF language code indicating the language used in the user's review.
   * This field contains the main language tag only, and not the secondary tag indicating country or region.
   * For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.
   */
  language: string;
  /** the user's overall rating for this place. This is a whole number, ranging from 1 to 5. */
  rating: number;
  /**
   * the user's review. When reviewing a location with Google Places, text reviews are considered optional.
   * Therefore, this field may by empty. Note that this field may include simple HTML markup.
   * For example, the entity reference `&amp;` may represent an ampersand character.
   */
  text: string;
  /** the time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. */
  time: string;
}

export interface AspectRating {
  /** the name of the aspect that is being rated. */
  type: AspectRatingType;
  /** the user's rating for this particular aspect, from 0 to 3. */
  rating: number;
}

export type AspectRatingType =
  | "appeal"
  | "atmosphere"
  | "decor"
  | "facilities"
  | "food"
  | "overall"
  | "quality"
  | "service";

import { findPlaceFromText, FindPlaceFromTextResponse } from './lib/places'

const params = { input: "Google", inputtype: 'textquery' as const, key: process.env.GOOGLE_MAPS_API_KEY };

findPlaceFromText({ params })
    .then((r: FindPlaceFromTextResponse) => { console.log(r.data) })
    .catch((e) => { console.log(e) })


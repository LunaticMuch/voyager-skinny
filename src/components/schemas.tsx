const yelpFile = require('./schemas/yelp_introspection.json')
const shopfifyFile = require('./schemas/shopify_introspection.json')
const swapiFile = require('./schemas/swapi_introspection.json')

export const PRESETS = [
    {
        name: 'YELP',
        version:'3.1.2',
        source: yelpFile
    },
    {
        name: 'Shopify',
        version:'7.1.1',
        source:shopfifyFile
    },
    {
        name: 'Swapi',
        version:'0.4.1',
        source:swapiFile
    }
]

export const defaultPreset = PRESETS[0]


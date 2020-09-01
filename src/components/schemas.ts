const yelpFile = require('./schemas/yelp_introspection.json')
const shopfifyFile = require('./schemas/shopify_introspection.json')
const swapiFile = require('./schemas/swapi_introspection.json')
const yelpSDL = require('./schemas/yelp.graphql')

// import graphql libraries for generating introspection from SDL
import {buildSchema, introspectionFromSchema} from 'graphql'
const yelpIntrospection = introspectionFromSchema(buildSchema(yelpSDL))

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
    },
    {
        name:'YELP converted',
        version:'0.0.1',
        source: yelpIntrospection
    }
]

export const defaultPreset = PRESETS[0]


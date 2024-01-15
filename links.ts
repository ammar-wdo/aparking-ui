export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const ALL_SERVICES = BASE_URL + '/api/services'

export const ADD_BOOKMARK = BASE_URL + '/api/checkout'

export const UPDATE_BOOKING = BASE_URL + '/api/checkout/update'

export const GET_BOOKING = BASE_URL + '/api/booking'

export const DELETE_BOOKING = BASE_URL + '/api/booking/cancel'

export const GET_AIRPORTS = BASE_URL + '/api/airport'

export const CONTACT_US = BASE_URL + '/api/contact-us'


export const GET_ENTITIES = BASE_URL + '/api/entities'


export const GET_SERVICES = BASE_URL + '/api/services/entity'

export const ADD_REVIEW = BASE_URL + '/api/review'

export const GET_CATEGORIES = BASE_URL + '/api/category'
export const GET_BLOGS = BASE_URL + '/api/blog'
export const GET_ABOUT = BASE_URL + '/api/about'
export const GET_FAQ = BASE_URL + '/api/faq'
export const GET_TERMS = BASE_URL + '/api/terms'
export const GET_PRIVACY = BASE_URL + '/api/privacy'
export const GET_FAQ_CAT = BASE_URL + '/api/faq-cat'
export const PROMOCODE = BASE_URL + '/api/promocode'

export const SEO_ENTITY = GET_ENTITIES + '/seo'
export const SEO_SERVICE = ALL_SERVICES + '/seo'






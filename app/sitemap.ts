import { GET_AIRPORTS, GET_BLOGS, SEO_ENTITY, SEO_SERVICE } from '@/links'
import { Airport, Blog, Entity, Service } from '@/schemas'
import axios from 'axios'
import { MetadataRoute } from 'next'

type FullEntity = Entity & {airport:{slug:string}}
type FullService = Service & {entity:{slug:string,airport:{slug:string}}}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const resAirports = await axios(GET_AIRPORTS) 
    const airportsSlugs:MetadataRoute.Sitemap = (resAirports.data.airports as Airport[]).map(airport=>({url:`${process.env.NEXT_PUBLIC_MY_URL}/${airport.slug}`}))
    const resEntities= await axios(SEO_ENTITY) 
    const entitiesSlugs:MetadataRoute.Sitemap = (resEntities.data.entities as FullEntity[]).map(entity=>({url:`${process.env.NEXT_PUBLIC_MY_URL}/${entity.airport.slug}/${entity.slug}`}))
    const resServices= await axios(SEO_SERVICE) 
    const servicesSlugs:MetadataRoute.Sitemap = (resServices.data.services as FullService[]).map(service=>({url:`${process.env.NEXT_PUBLIC_MY_URL}/${service.entity.airport.slug}/${service.entity.slug}/${service.slug}`}))

    const resBlogs = await axios(GET_BLOGS) 
    const blogsSlugs:MetadataRoute.Sitemap = (resBlogs.data.blogs as Blog[]).map(blog=>({url:`${process.env.NEXT_PUBLIC_MY_URL}/blog/${blog.slug}`}))


  









  return [
    {
      url: process.env.NEXT_PUBLIC_MY_URL as string,
   
    },
    ...airportsSlugs,
    ...entitiesSlugs,
    ...servicesSlugs,
    ...blogsSlugs

   
  ]
}
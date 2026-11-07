import type { MetadataRoute } from "next";
const routes = ["/","/projects/cedar-house","/projects/west-14th-renewal","/projects/garden-annex"];
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""); if (!base) return []; return routes.map((route,index)=>({url:base+route,lastModified:new Date(),changeFrequency:route==="/"?"weekly":"monthly",priority:index===0?1:0.7})); }

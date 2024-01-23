import { getCollection } from "astro:content"

export const getLatestPosts = async () => {
  const posts = await getCollection('blog')
  return posts.splice(0,10).map( (enter) => {
    return {
      type: enter.collection,
      slug: enter.slug,
    }
  })
}

export const getAllPosts = async () => {
  return await getCollection('blog')
}
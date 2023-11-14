import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getPostsByTag = (posts: Array<CollectionEntry<"blog">>, tag: string) =>
	posts.filter(post => slugifyAll(post.data.tags).includes(tag));

export default getPostsByTag;

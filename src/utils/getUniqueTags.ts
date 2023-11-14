import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: Array<CollectionEntry<"blog">>) => {
	const filteredPosts = posts.filter(({ data }) => !data.draft);
	const tags: Array<string> = filteredPosts
		.flatMap(post => post.data.tags)
		.map(tag => slugifyStr(tag))
		.filter(
			(value: string, index: number, self: Array<string>) =>
				self.indexOf(value) === index
		)
		.sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
	return tags;
};

export default getUniqueTags;

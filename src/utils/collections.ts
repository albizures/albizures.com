import { slugifyAll, slugifyStr } from './slugify';

type WithDraft = {
	data: { draft?: boolean | undefined };
};

type WithDate = {
	data: { publicatedAt: Date };
};

type WithTags = {
	data: { tags: Array<string> };
};

export function sortCollection<T extends WithDate & WithDraft>(
	posts: Array<T>,
) {
	return posts
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.publicatedAt).getTime() / 1000) -
				Math.floor(new Date(a.data.publicatedAt).getTime() / 1000),
		);
}

export function filderByTag<TItem extends WithTags>(
	items: Array<TItem>,
	tag: string,
) {
	return items.filter((item) => slugifyAll(item.data.tags).includes(tag));
}

export function getUniqueTags<TItem extends WithTags & WithDraft>(
	posts: Array<TItem>,
) {
	const filteredPosts = posts.filter(({ data }) => !data.draft);
	const tags: Array<string> = filteredPosts
		.flatMap((post) => post.data.tags)
		.map((tag) => slugifyStr(tag))
		.filter(
			(value: string, index: number, self: Array<string>) =>
				self.indexOf(value) === index,
		)
		.sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
	return tags;
}

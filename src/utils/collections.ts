import { slug as slugger } from 'github-slugger';

type WithDraft = Partial<Record<'draft', boolean | undefined>>;
type WithDate = Record<'publicatedAt', Date>;
type WithTags = Record<'tags', Array<string>>;
type WithSlug = Partial<Record<'slug', string>>;
type WithTitle = Record<'title', string>;

type Data<TProperties> = Record<'data', TProperties>;

export function sortCollection<T extends Data<WithDate & WithDraft>>(
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

export function filderByTag<TItem extends Data<WithTags>>(
	items: Array<TItem>,
	tag: string,
) {
	return items.filter((item) => slugifyAll(item.data.tags).includes(tag));
}

export function getUniqueTags<TItem extends Data<WithTags & WithDraft>>(
	item: Array<TItem>,
) {
	const filteredPosts = item.filter(({ data }) => !data.draft);
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

export function slugifyStr(str: string) {
	return slugger(str);
}

export function slugify(post: WithSlug & WithTitle) {
	return post.slug ? slugger(post.slug) : slugger(post.title);
}

export function slugifyAll(arr: Array<string>) {
	return arr.map((str) => slugifyStr(str));
}

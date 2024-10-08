import React from 'react'
import Fuse from 'fuse.js'
import type { PostEntry } from '../content/config'
import { slugify } from '../utils/collections'
import { EntryList, PostItem } from './EntryList'

export type SearchItem = {
	title: string
	description: string
	data: PostEntry['data']
}

type Props = {
	searchList: Array<SearchItem>
}

type SearchResult = {
	item: SearchItem
	refIndex: number
}

export default function SearchBar({ searchList }: Props) {
	const inputRef = React.useRef<HTMLInputElement>(null)
	const [inputVal, setInputVal] = React.useState('')
	const [searchResults, setSearchResults]
		= React.useState<Array<SearchResult> | null>(null)

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputVal(e.currentTarget.value)
	}

	const fuse = React.useMemo(
		() =>
			new Fuse(searchList, {
				keys: ['title', 'description'],
				includeMatches: true,
				minMatchCharLength: 2,
				threshold: 0.5,
			}),
		[searchList],
	)

	React.useEffect(() => {
		// if URL has search query,
		// insert that search query in input field
		const searchUrl = new URLSearchParams(window.location.search)
		const searchStr = searchUrl.get('q')
		if (searchStr) {
			setInputVal(searchStr)
		}

		// put focus cursor at the end of the string
		setTimeout(() => {
			inputRef.current!.selectionStart = inputRef.current!.selectionEnd
				= searchStr?.length || 0
		}, 50)
	}, [])

	React.useEffect(() => {
		// Add search result only if
		// input value is more than one character
		let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : []
		setSearchResults(inputResult)

		// Update search string in URL
		if (inputVal.length > 0) {
			const searchParams = new URLSearchParams(window.location.search)
			searchParams.set('q', inputVal)
			const newRelativePathQuery
				= `${window.location.pathname}?${searchParams.toString()}`
			history.replaceState(history.state, '', newRelativePathQuery)
		}
		else {
			history.replaceState(history.state, '', window.location.pathname)
		}
	}, [inputVal])

	return (
		<>
			<label className="relative block">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
					</svg>
				</span>
				<input
					className="block w-full rounded border border-primary-accent
					border-opacity-40 bg-base-100 py-3 pl-10
					pr-3 placeholder:italic placeholder:text-opacity-75
					focus:border-opacity-100 focus:outline-none"
					placeholder="Search for anything..."
					type="text"
					name="search"
					value={inputVal}
					onChange={handleChange}
					autoComplete="off"
					autoFocus
					ref={inputRef}
				/>
			</label>

			{inputVal.length > 1 && (
				<div className="mt-8">
					Found
					{' '}
					{searchResults?.length}
					{searchResults?.length && searchResults?.length === 1
						? ' result'
						: ' results'}
					{' '}
					for '
					{inputVal}
					'
				</div>
			)}

			<EntryList>
				{searchResults
				&& searchResults.map(({ item, refIndex }) => (
					<PostItem
						href={`/posts/${slugify(item)}`}
						frontmatter={item.data}
						key={`${refIndex}-${slugify(item)}`}
					/>
				))}
			</EntryList>
		</>
	)
}

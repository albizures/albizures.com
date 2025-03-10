import { SITE } from '../config'

function getPageNumbers(numberOfPosts: number) {
	const numberOfPages = numberOfPosts / Number(SITE.itemPerPage)

	let pageNumbers: Array<number> = []
	for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
		pageNumbers = [...pageNumbers, i]
	}

	return pageNumbers
}

export default getPageNumbers

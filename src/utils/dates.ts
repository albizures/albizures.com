export function formatDate(date: Date, locale: string) {
	return date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export function formatTime(date: Date, locale: string) {
	return date.toLocaleTimeString(locale, {
		hour: '2-digit',
		minute: '2-digit',
	});
}

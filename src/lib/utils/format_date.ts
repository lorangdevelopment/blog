type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDateReadable(date: string, dateStyle: DateStyle = 'medium', locales = 'da') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

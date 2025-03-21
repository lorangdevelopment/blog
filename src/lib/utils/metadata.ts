export const DEFAULT_HOST = 'http://localhost:5173';
export const DEFAULT_DESCRIPTION = 'Min personlige hjemmeside';

export function getInlinedScriptTag(jsonSchema: string): string {
	return `<script type="application/ld+json">${jsonSchema}</` + 'script>';
}

export function personalBrandJsonSchema() {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		url: DEFAULT_HOST,
		sameAs: ['https://www.linkedin.com/in/yourusername'],
		name: 'Marcus Lorang',
		description: DEFAULT_DESCRIPTION
	});
}

export function websiteSchema() {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Marcus Lorang',
		url: DEFAULT_HOST,
		description: DEFAULT_DESCRIPTION
	});
}

export function createPostSchema(post: {
	title: string;
	description?: string;
	date: string;
	categories?: string[];
	slug: string;
}) {
	return JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: new Date(post.date).toISOString(),
		url: `${DEFAULT_HOST}/blog/indlæg/${post.slug}`,
		keywords: post.categories?.join(', '),
		author: {
			'@type': 'Person',
			name: 'Marcus Lorang'
		},
		publisher: {
			'@type': 'Person',
			name: 'Marcus Lorang'
		}
	});
}

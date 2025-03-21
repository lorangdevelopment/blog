import { DEFAULT_HOST, DEFAULT_DESCRIPTION } from '$lib/utils/metadata.js';
import type { RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/types';

const title = 'Marcus Lorang';
const description = DEFAULT_DESCRIPTION;
const url = DEFAULT_HOST;

export const prerender = true;

function escapeHTML(html: string): string {
	const chars: { [key: string]: string } = {
		'"': 'quot',
		"'": '#39',
		'&': 'amp',
		'<': 'lt',
		'>': 'gt'
	};

	return html.replace(/["'&<>]/g, (c) => `&${chars[c]};`);
}

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('api/blog/indlæg');
	const posts: Post[] = await response.json();

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${title}</title>
				<description>${description}</description>
				<link>${url}</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `<item>
    <title>${escapeHTML(post.title)}</title>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <link>${escapeHTML(post.slug)}</link>
        <guid>${escapeHTML(post.slug)}</guid>
        <description>${escapeHTML(post.description)}</description>
    </item>
    `
					)
					.join('')}
			</channel>
		</rss>
	`
		.replace(/>[^\S]+/gm, '>')
		.replace(/[^\S]+</gm, '<')
		.trim();

	return new Response(xml, {
		headers: {
			'Cache-Control': `max-age=${30 * 60 * 1e3}`,
			'Content-Type': 'application/xml'
		}
	});
};

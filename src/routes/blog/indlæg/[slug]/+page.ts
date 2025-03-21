import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../../indlæg/${params.slug}.md`);

		return {
			content: post.default,
			meta: {
				...post.metadata,
				slug: params.slug
			}
		};
	} catch (e) {
		error(404, `Kunne ikke finde ${params.slug}`);
	}
};

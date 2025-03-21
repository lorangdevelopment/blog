import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/blog/indlæg');
	const posts: Post[] = await response.json();
	return { posts };
};

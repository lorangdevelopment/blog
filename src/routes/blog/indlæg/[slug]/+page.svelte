<script lang="ts">
	import { formatDateReadable } from '$lib/utils/format_date';
	import { DEFAULT_HOST, getInlinedScriptTag, createPostSchema } from '$lib/utils/metadata';

	let { data } = $props();

	const title = data.meta.title;
	const description = data.meta.description;
	const url = DEFAULT_HOST;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<link rel="canonical" href="{url}/blog/indlæg/{data.meta.slug}" />
	<meta property="og:url" content="{url}/blog/indlæg/{data.meta.slug}" />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={new Date(data.meta.date).toISOString()} />
	<meta property="article:author" content="Marcus Lorang" />
	<meta name="keywords" content={data.meta.categories?.join(', ')} />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Marcus Lorang" />
	<link rel="alternate" type="application/rss+xml" {title} href="{url}/rss.xml" />
	<meta property="og:locale" content="da_DK" />
	{@html getInlinedScriptTag(createPostSchema(data.meta))}
</svelte:head>

<article>
	<hgroup>
		<h1 class="mb-4 text-xl font-medium">{data.meta.title}</h1>
		<div class="mb-4 flex gap-5">
			<time
				class="whitespace-nowrap italic opacity-50"
				datetime={new Date(data.meta.date).toISOString()}>{formatDateReadable(data.meta.date)}</time
			>
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</div>
	</hgroup>

	<div>
		<data.content />
	</div>
</article>

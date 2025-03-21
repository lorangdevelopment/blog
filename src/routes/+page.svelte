<script lang="ts">
	import { formatDateReadable } from '$lib/utils/format_date';
	import {
		DEFAULT_HOST,
		DEFAULT_DESCRIPTION,
		getInlinedScriptTag,
		personalBrandJsonSchema,
		websiteSchema
	} from '$lib/utils/metadata';

	let { data } = $props();

	const title = 'Marcus Lorang';
	const description = DEFAULT_DESCRIPTION;
	const url = DEFAULT_HOST;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Marcus Lorang" />
	<link rel="alternate" type="application/rss+xml" {title} href="{url}/rss.xml" />
	<meta property="og:locale" content="da_DK" />
	{@html getInlinedScriptTag(personalBrandJsonSchema())}
	{@html getInlinedScriptTag(websiteSchema())}
</svelte:head>

<section>
	<div class="mb-8">
		<p>
			Hej, mit navn er Marcus. Jeg bor i Danmark, og jeg er i øjeblikket elev på Horsens
			Handelsskole. Det her er min personlige hjemmeside, hvor jeg skriver om teknologi, økonomi
			samt mine tanker om tilfældige emner.
		</p>
	</div>
	<ul>
		{#each data.posts as post}
			<li class="my-4">
				<a class="flex gap-10" href="/blog/indlæg/{post.slug}">
					<time
						class="whitespace-nowrap italic opacity-50"
						datetime={new Date(post.date).toISOString()}>{formatDateReadable(post.date)}</time
					>
					<div>{post.title}</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

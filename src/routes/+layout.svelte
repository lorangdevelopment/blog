<script lang="ts">
	import '../app.css';
	import { Header, Footer } from '$lib/components';
	let { children } = $props();
</script>

<Header />
<main class="flex-1">
	{@render children?.()}
</main>
<Footer />

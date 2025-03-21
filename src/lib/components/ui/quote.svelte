<script lang="ts">
	let { children } = $props();
</script>

<p
	class="border-l-2 pl-2 italic opacity-50
"
>
	<span class="font-medium">“</span>{@render children()}<span class="font-medium">”</span>
</p>

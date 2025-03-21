<script lang="ts">
	import { page } from '$app/state';
</script>

{#if page.status === 404}
	<h1>Siden du leder efter findes ikke...</h1>
	<p>Vi beklager, men vi kan ikke finde siden du leder efter. Gå evt. til forsiden.</p>
{:else}
	<h1>Noget gik galt...</h1>
	<p>
		Vi beklager, men noget gik galt, da vi forsøgte at vise denne side. Prøv venligst at genindlæse.
	</p>
{/if}

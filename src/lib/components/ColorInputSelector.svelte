<script lang="ts">
	import { bgHighlightColor, textHighlightColor } from '../../stores';

	export let selector: selectorType;
	type selectorType = 'background' | 'text';
</script>

{#if selector === 'background'}
	<div class={$$props.class} style="background-color: {$bgHighlightColor};">
		<input class="selector-color h-full w-full" type="color" bind:value={$bgHighlightColor} />
	</div>
{:else if selector === 'text'}
	<div class={$$props.class} style="background-color: {$textHighlightColor};">
		<input class="selector-color h-full w-full" type="color" bind:value={$textHighlightColor} />
	</div>
{/if}

<style>
	.selector-color {
		opacity: 0;
	}
	input[type='color'] {
		cursor: pointer;
	}
</style>

<script lang="ts">
	import { bgHighlightColor, textHighlightColor } from '../../stores';
	export let placeholder: string;

	export let selector: selectorType;
	type selectorType = 'background' | 'text';
</script>

{#if selector === 'background'}
	<input class={$$props.class} type="text" bind:value={$bgHighlightColor} {placeholder} />
{:else if selector === 'text'}
	<input class={$$props.class} type="text" bind:value={$textHighlightColor} {placeholder} />
{/if}

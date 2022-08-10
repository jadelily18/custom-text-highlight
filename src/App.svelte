<script lang="ts">
	import './app.css';
	import { bgHighlightColor, textHighlightColor, theme } from './stores';

	import Selector from './lib/components/selector.svelte';
</script>

<!-- TODO: add dark mode toggle add toggle check to disable plugin functionality and ::selection functionality for all webpages -->

<div class="app dark:bg-neutral-800 ">
	<div
		class="flex flex-col w-72 p-6 pb-5.5 space-y-5"
		style="--bg-highlight-color: {$bgHighlightColor}; --text-highlight-color: {$textHighlightColor};"
	>
		<h1 class="text-xl text-center text-gray-900 dark:text-white font-bold">
			Custom Highlight Color
		</h1>

		<div class="selectors space-y-3 mb-6">
			<Selector
				label="Background Highlight"
				placeholder="Background Highlight"
				selector="background"
			/>
			<Selector label="Text Highlight" placeholder="Text Highlight" selector="text" />
		</div>
		<button
			class="save-button w-full p-2.5 select-none transition-colors bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-md"
			>Save</button
		>
	</div>

	<div class="flex p-2 pt-0.5 px-4 justify-between font-semibold dark:text-white">
		<p>v1.0.0</p>
		<a
			class="hover:text-gray-500 transition-colors"
			href="https://github.com"
			target="_blank"
			rel="noreferrer noopener">Source</a
		>
	</div>
</div>

<style lang="scss">
	:global(::selection) {
		color: var(--text-highlight-color);
		background-color: var(--bg-highlight-color);
	}
</style>

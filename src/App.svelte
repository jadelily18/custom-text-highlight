<script lang="ts">
	import './app.css';

	import Selector from './lib/components/selector.svelte';
</script>

<!-- TODO: add actual save and load functionality (svelte stores?) with a toggle checkbox -->

<div class="flex flex-col w-72 p-6 dark:bg-gray-800">
	<h1 class="pb-6 text-xl text-center text-gray-900 dark:text-white font-bold">
		Custom Highlight Color
	</h1>
	<div class="selectors space-y-3">
		<Selector label="Background Highlight" placeholder="Background Highlight" />
		<Selector label="Text Highlight" placeholder="Text Highlight" />
	</div>
	<button
		class="save-button w-full p-2.5 mt-8 transition-colors bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-md"
		>Save</button
	>
</div>

<div class="flex p-2 pt-0.5 px-4 justify-between font-semibold dark:bg-gray-800 dark:text-white">
	<p>v1.0.0</p>
	<a
		class="hover:text-gray-500 transition-colors"
		href="https://github.com"
		target="_blank"
		rel="noreferrer noopener">Source</a
	>
</div>

<style lang="scss">
	// .popup {
	// 	// background-color: #242424;
	// }
</style>

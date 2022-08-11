<script lang="ts">
	import './app.css';

	import { darkMode, bgHighlightColor, textHighlightColor } from './stores';

	import Selector from './lib/components/selector.svelte';
	import ThemeToggle from './lib/components/ThemeToggle.svelte';

	// if ($darkMode != true && $darkMode != false) {
	// 	$darkMode = true;
	// }

	function saveValues() {
		chrome.storage.sync.set({ bgHighlightColor: $bgHighlightColor }, () => {
			console.log('Background Highlight Color set to: ', $bgHighlightColor);
		});
		chrome.storage.sync.set({ textHighlightColor: $textHighlightColor }, () => {
			console.log('Text Highlight Color set to: ', $textHighlightColor);
		});
	}

	$: dark = $darkMode;

	const toggleDark = () => {
		$darkMode = !$darkMode;
	};
</script>

<!-- TODO: add toggle check to disable plugin functionality and ::selection functionality for all webpages -->

<div class:dark>
	<div class="app dark:bg-neutral-800">
		<div
			class="flex flex-col w-72 p-6 pb-5.5 space-y-5"
			style="--bg-highlight-color: {$bgHighlightColor}; --text-highlight-color: {$textHighlightColor};"
		>
			<div class="flex">
				<h1 class="text-lg self-center text-gray-900 dark:text-white font-bold">
					Custom Highlight Color
				</h1>
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="ml-2">
					<button
						class="flex justify-center p-2 bg-gray-800 hover:bg-gray-600 dark:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors duration-300 rounded-full"
						on:click={toggleDark}
					>
						<ThemeToggle class="text-lg self-center text-white dark:text-gray-900" />
					</button>
				</div>
			</div>

			<div class="selectors space-y-3 mb-6">
				<Selector
					label="Background Highlight"
					placeholder="Background Highlight"
					selector="background"
				/>
				<Selector label="Text Highlight" placeholder="Text Highlight" selector="text" />
			</div>

			<button
				class="w-full p-2.5 rounded-md bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-semibold transition-all"
				on:click={saveValues}>Set & Save</button
			>
		</div>

		<div class="flex p-2 pt-0.5 px-4 justify-between font-semibold dark:text-white">
			<p>v1.0.0</p>
			<a
				class="hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
				href="https://github.com/jadelily18/custom-text-highlight"
				target="_blank"
				rel="noreferrer noopener">Source</a
			>
		</div>
	</div>
</div>

<style lang="scss">
	:global(::selection) {
		color: var(--text-highlight-color);
		background-color: var(--bg-highlight-color);
	}
</style>

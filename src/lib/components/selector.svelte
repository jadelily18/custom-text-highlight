<script lang="ts">
	import { bgHighlightColor, textHighlightColor } from '../../stores';

	import TextInputSelector from './TextInputSelector.svelte';
	import ColorInputSelector from './ColorInputSelector.svelte';

	export let label: string;
	export let placeholder: string;

	export let selector: selectorType;
	type selectorType = 'background' | 'text';
</script>

<div>
	<h1 class="text-md mb-1 font-semibold text-gray-700 dark:text-neutral-50">{label}</h1>
	<div
		class="flex w-full h-10 group rounded-md outline outline-1 outline-offset-0 outline-gray-300 dark:outline-gray-900 hover:outline-gray-700 dark:hover:outline-black transition-all overflow-clip"
	>
		<TextInputSelector
			class="w-4/6 py-2 px-3.5 outline-none dark:text-white bg-neutral-100 dark:bg-neutral-700 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-600 placeholder:text-neutral-500 focus:placeholder:text-neutral-800 group-hover:placeholder:text-neutral-800 dark:placeholder:text-neutral-400 dark:focus:placeholder:text-neutral-400 dark:group-hover:placeholder:text-neutral-400 placeholder:font-semibold text-sm placeholder:italic transition-all"
			{selector}
			{placeholder}
		/>
		<ColorInputSelector class="grow h-full p-0 m-0" {selector} />
	</div>
</div>

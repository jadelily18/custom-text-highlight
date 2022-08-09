<script lang="ts">
	export let label: string;
	export let placeholder: string;
	export let color: string = '#942929';

	function changeColor(newColor: string) {
		color = newColor;
	}
</script>

<h1 class="text-md font-semibold text-gray-700 dark:text-gray-50">{label}</h1>
<div
	class="selector flex w-full h-10 group rounded-md outline outline-1 outline-offset-0 outline-gray-300 dark:outline-gray-900 hover:outline-gray-700 dark:hover:outline-black transition-all overflow-clip"
>
	<input
		class="peer w-4/6 py-2 px-3.5 outline-none bg-gray-100 group-hover:bg-gray-100 placeholder:text-gray-500 focus:placeholder:text-gray-800 group-hover:placeholder:text-gray-800 placeholder:font-semibold placeholder:italic transition-all"
		type="text"
		bind:value={color}
		{placeholder}
	/>
	<div class="color-wrapper grow h-full p-0 m-0" style="background-color: {color};">
		<input class="selector-color h-full" type="color" bind:value={color} />
	</div>
</div>

<style lang="scss">
	.selector {
		:hover {
			outline: 3px;
		}
	}
	.selector-color {
		opacity: 0;
	}
	::selection {
		color: var(--color);
		background: var(--color);
	}
</style>

<script lang="ts">
	import { darkMode } from '../../stores';

	import SunIcon from '~icons/material-symbols/wb-sunny';
	import MoonIcon from '~icons/bi/moon-stars';
</script>

{#if $darkMode == true}
	<MoonIcon class={$$props.class} />
{:else if $darkMode == false}
	<SunIcon class={$$props.class} />
{/if}

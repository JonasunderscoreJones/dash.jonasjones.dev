<script>
	import { onMount } from 'svelte';
	import { ensureAuthenticated } from '$lib/session.js';
	onMount(() => {
	  ensureAuthenticated(); // This will check the session key and redirect if necessary
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
	<h2>Welcome to the Dashboard</h2>

	<p>You are logged in and have access to this page.</p>
	<img src="https://cdn.tw25.net/img/jonrefs/party.gif" alt="Bouncy Jonrefs">
</div>

<script>
	import { onMount } from 'svelte';
	import { ensureAuthenticated } from '../utils/session.js';

	onMount(() => {
	  ensureAuthenticated(); // This will check the session key and redirect if necessary
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h2>Welcome to the Dashboard</h2>

<p>You are logged in and have access to this page.</p>

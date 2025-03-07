<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this Dashboard</h1>

	<p>
		This is a Dashboard app for my Ecosystem's services.
		The list and roadmap of supported services can be viewed in the 
		<a href="https://github.com/JonasunderscoreJones/dash.jonasjones.dev/blob/main/README.md">README.md</a>
		page of the github repository. Thus, the Dashboard is opensource in the same repository.
	</p>

	<p>
		Signups are allowed to anyone. This is because the default user scope currently has no permissions.
		However, the Dashboard is designed to be used with a user scope system. This means that the user scope
		will be able to access services that are only available to them. Scopes are granted by an admin account.
	</p>

	<p>
		Further are the accounts not limited to the Dashboard. They are their own entity, hosted on cloudflare workers.
		Thus, the accounts are available to be used in other projects as well. The accounts are also opensource in the
		<a href="https://github.com/JonasunderscoreJones/accounts.jonasjones.dev/">github repository</a>.
	</p>
</div>

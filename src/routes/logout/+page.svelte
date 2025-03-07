<script>
    import { goto } from '$app/navigation';
    import { resetSession } from '$lib/session.js';

    resetSession();
    goto('/login');
</script>

<div>
    <h1>Logging out...</h1>
    <p>Redirecting to the login page...</p>
</div>
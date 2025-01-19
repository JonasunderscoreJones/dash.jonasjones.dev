<script>
    import { navigate } from 'svelte-routing';
    import { setSessionKey } from '../../utils/session.js';
    let username = '';
    let password = '';
    let errorMessage = '';

    const handleLogin = async () => {
      try {
        const response = await fetch('https://your-backend-api/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (data.sessionKey) {
          // Set session key as a cookie
          setSessionKey(data.sessionKey);
          // Get the return URL from query parameters
          const returnUrl = new URLSearchParams(window.location.search).get('returnUrl') || '/';
          navigate(returnUrl);  // Redirect back to the requested path
        } else {
          errorMessage = 'Invalid login credentials';
        }
      } catch (error) {
        errorMessage = 'Error logging in. Please try again later.';
      }
    };
  </script>

  <h2>Login</h2>

  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}

  <form on:submit|preventDefault={handleLogin}>
    <label for="username">Username:</label>
    <input id="username" bind:value={username} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <button type="submit">Login</button>
  </form>

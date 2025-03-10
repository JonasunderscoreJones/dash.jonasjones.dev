<script>
    import { navigate } from 'svelte-routing';
    import { onMount } from 'svelte';
    import { setSessionKey, redirectToHome, ACCOUNTS_WORKER_URL } from '$lib/session.js';
    import { page } from '$app/state';
    import AlphaNotice from '$lib/components/AlphaNotice.svelte';
    let email = '';
    let password = '';
    let errorMessage = '';
    let showPassword = false;

    onMount(() => {
      redirectToHome(); // This will check the session key and redirect if necessary
    });

    const handleLogin = async () => {
      try {
        // Check if email is a valid email address
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // If it's not a valid email, rename it to 'username'
        const loginData = isValidEmail ? { email } : { username: email };

        // Make the fetch request with either 'email' or 'username'
        const response = await fetch(ACCOUNTS_WORKER_URL + '/login', {
          method: 'POST',
          body: JSON.stringify({ ...loginData, password }),
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
          // reload the page
          location.reload();
        } else {
          errorMessage = 'Invalid login credentials';
        }
      } catch (error) {
        errorMessage = 'Error logging in. Please try again later.';
      }
    };
  </script>

  <div class="login-container">
    <div class="login-prompt">
      <h1>Login</h1>

      <AlphaNotice />

      {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
      {/if}

      <form on:submit|preventDefault={handleLogin}>
        <label for="email">Email or Username:</label>
        <input id="email" bind:value={email} required />

        <label for="password">Password:</label>

        <div style="display: flex; align-items: center;">
          <input style="flex-grow: 1; margin-right: 10px;" type={showPassword ? 'text' : 'password'} id="password" bind:value={password} required />

          <button
            type="button"
            on:click={() => showPassword = !showPassword}
            style="border: none; cursor: pointer; margin-top: -14px;"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <i class={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          </button>
        </div>

        <p>Have no account? <a href="/register{page.url.search}">Register!</a></p>

        <button type="submit">Login</button>
      </form>
    </div>
  </div>

  <style>
    .login-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      align-items: center;
      height: 80vh;
      width: 100vw;
      margin-top: 25px;
    }

    .login-prompt {
      background-color: black;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      width: 300px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      font-size: 14px;
      margin-bottom: 15px;
      border: 1px solid #222222;
      border-radius: 4px;
      background-color: rgb(44, 44, 44);
      color: white;
    }

    input:focus {
      border-color: #036300;
      outline: none;
    }

    button {
      background-color: #036300;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: var(--color-theme-2);
    }

    p {
      text-align: center;
      font-size: 14px;
      margin-top: -10px;
    }
  </style>

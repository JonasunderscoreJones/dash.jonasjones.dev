export const ACCOUNTS_WORKER_URL = 'https://accounts.jonasjones.dev';

export function getSessionKey() {
    const match = document.cookie.match(/(^| )sessionKey=([^;]+)/);
    return match ? match[2] : null;
}

export function setSessionKey(sessionKey) {
    document.cookie = `sessionKey=${sessionKey}; path=/; max-age=604800`;
}

export function redirectToLogin() {
    const currentPath = encodeURIComponent(window.location.pathname);
    window.location.href = `/login?returnUrl=${currentPath}`;
}

export function resetSession() {
    document.cookie = `sessionKey=; path=/; max-age=0`;
    window.location.href = '/login';
}

export function redirectToHome() {
    if (getSessionKey()) {
        window.location.href = new URLSearchParams(window.location.search).get('returnUrl') || '/';
        console.log(new URLSearchParams(window.location.search).get('returnUrl') || '/')
    } else {
        console.log(getSessionKey())
    }
}

export function ensureAuthenticated() {
    if (!getSessionKey()) {
        redirectToLogin();
    }
}
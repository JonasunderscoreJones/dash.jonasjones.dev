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

export function ensureAuthenticated() {
    if (!getSessionKey()) {
        redirectToLogin();
    }
}
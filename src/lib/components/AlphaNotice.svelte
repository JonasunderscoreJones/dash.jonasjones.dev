<script>
    export let expanded;
</script>

<div class="alpha-notice">
    <h2><b>This is an Alpha Version</b></h2>
    {#if expanded}
        <p>
            Note that this Dashboard is in an alpha state. This means that there are bugs and missing features.
            Please report any bugs or issues to the
            <a href="https://github.com/JonasunderscoreJones/dash.jonasjones.dev/issues">GitHub repository</a>.
        </p>
    {:else}
        <a href="/about">More Info</a>
    {/if}
</div>

<style>
    .alpha-notice {
        background-color: #c48900;
        color: #721c24;
        padding: 1rem;
        border: 1px solid #533300;
        border-radius: 0.25rem;
        margin: 1rem 0;
    }

    .alpha-notice h2 {
        margin-top: 0;
    }

    .alpha-notice a {
        color: #721c24;
        text-decoration: underline;
    }

    .alpha-notice a:hover {
        color: #560009;
    }
</style>
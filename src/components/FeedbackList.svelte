<script>
    // THE LONG WAY TO USE STORES
    // import { onMount, onDestroy } from 'svelte';
    import {FeedbackStore} from '../stores';
    import { fade, scale } from 'svelte/transition';
    import FeedbackItem from "./FeedbackItem.svelte";

    // THE LONG WAY TO USE STORES
    // export let feedback = []
    // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)
    // onMount(() => {
    //     console.log("mounted")
    // })    
    // onDestroy(() => {
    //     unsubscribe()
    // })
</script>

<!-- THE LONG WAY TO USE STORES -->
<!-- {#each feedback as fb (fb.id)} -->
<!-- THE EASY WAY TO USE STORES -->
{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={fb} on:delete-feedback/>
</div>
{/each}
<script lang="ts">
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";
    import FeedbackForm from "./components/FeedbackForm.svelte";

    let feedback: {id: number; rating: number; text: string}[] = []

    // $: count = feedback.length;
    // $: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

    // const deleteFeedback = (e) => {
    //     const itemId = e.detail;
    //     feedback = feedback.filter((item) => item.id != itemId);
    // }

    // const addFeedback = (e) => {
    //     feedback = [e.detail, ...feedback]
    // }
</script>

<main class="container">
    <FeedbackForm/>
    <FeedbackStats/>
    <FeedbackList/>
</main>

<style>
</style>
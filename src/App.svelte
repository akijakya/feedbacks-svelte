<script lang="ts">
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import FeedbackForm from "./components/FeedbackForm.svelte";

	let feedback: {id: number; rating: number; text: string}[] = [
		{
			id: 1,
			rating: 8,
			text: "lorem ipsum, vágod hapsim"
		},
		{
			id: 2,
			rating: 2,
			text: "lorem ipsum, vágod hapsim"
		},
		{
			id: 3,
			rating: 7,
			text: "lorem ipsum, vágod hapsim"
		},
	]

	$: count = feedback.length;
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id != itemId);
	}
</script>

<main class="container">
	<FeedbackForm></FeedbackForm>
	<FeedbackStats {count} {average}/>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
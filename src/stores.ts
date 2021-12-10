import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
])
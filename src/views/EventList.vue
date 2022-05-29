<script>
import { onMounted } from "vue-demi";
import EventCard from "../components/EventCard.vue";
import { useEventStore } from "../stores/EventStores";
export default {
    components: {
        EventCard,
    },
    setup() {
        const eventStore = useEventStore();
        onMounted(() => {
            eventStore.fetchEvents().catch((error) => {
                this.$router.push({
                    name: "ErrorDisplay",
                    params: { error: error },
                });
            });
        });
        return {
            eventStore,
        };
    },
};
</script>

<template>
    <h1>Events for Good</h1>
    <div class="events">
        <EventCard
            v-for="event in eventStore.events"
            :key="event.id"
            :event="event"
        />
    </div>
</template>

<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
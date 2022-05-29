<script>
import { onMounted } from "vue-demi";
import { useEventStore } from "../stores/EventStores";
export default {
    props: ["id"],
    setup(props) {
        const eventStore = useEventStore();
        onMounted(() => {
            eventStore.fetchEvent(props.id);
        });
        return {
            eventStore,
        };
    },
};
</script>

<template>
    <div v-if="eventStore.event">
        <h1>{{ eventStore.event.title }}</h1>
        <p>
            {{ eventStore.event.time }} on {{ eventStore.event.date }} @
            {{ eventStore.event.location }}
        </p>
        <p>{{ eventStore.event.description }}</p>
    </div>
</template>
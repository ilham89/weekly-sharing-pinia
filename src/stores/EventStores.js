import { defineStore } from "pinia";
import EventService from "../services/EventService";
export const useEventStore = defineStore("EventStore", {
    state() {
        return {
            // Define state in here
            events: [],
            event: {},
            user: "Ilham Kukuh",
        };
    },
    getters: {
        getFirstName: (state) => state.user.split(" ")[0],
    },
    actions: {
        fetchEvents() {
            return EventService.getEvents()
                .then((response) => {
                    this.events = response.data;
                })
                .catch((error) => {
                    throw error;
                });
        },
        fetchEvent(id) {
            const existingEvent = this.events.find((event) => event.id === id);
            if (existingEvent) {
                this.event = existingEvent;
            } else {
                return EventService.getEvent(id)
                    .then((response) => {
                        this.event = response.data;
                    })
                    .catch((error) => {
                        throw error;
                    });
            }
        },
        createEvent(event) {
            return EventService.postEvent(event)
                .then((response) => {
                    this.event = response.data;
                })
                .catch((error) => {
                    throw error;
                });
        },
    },
});

<template>
    <div class="">
        <div class="router">
            <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
            <router-link class="btn btn-primary btn-sm" to="/form">Learn</router-link>
            <router-link class="btn btn-primary btn-sm" to="/shop">Shop</router-link>
        </div>

        <br>
        <br>

        <hr>
        <AddEvent />
        <hr>
        <div class="col-md-12">
            <EventItem
                v-for="(event_item, index) in this.$store.state.events"
                :event="event_item"
                key="index"
            />
        </div>
    </div>
</template>

<script>
    import {firebaseApp, eventsRef} from "../firebaseApp";
    import AddEvent from './AddEvent'
    import EventItem from './EventItem'

    export default {
        beforeCreate: function() {
            document.body.className = 'dashboard';
        },
        methods: {
            signOut() {
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        },


        components: {
            AddEvent,
            EventItem
        },
        mounted() {
            eventsRef.on('value', snap => {
                let events = []
                snap.forEach(event => {
                    events.push(event.val())
                })
                this.$store.dispatch('setEvents', events)
            })
        }
    }
</script>
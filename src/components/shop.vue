<template>
    <div class="">
        <div class="navStyle">
            <button class="signout float-right" @click="signOut">Sign Out</button>
            <router-link class="navLinks pl-5" to="/dashboard">Home</router-link>
            <router-link class="navLinks float-right pr-4" to="/shop">Workout</router-link>
            <router-link class="navLinks float-right pr-4" to="/form">Nutrition</router-link>
        </div>

        <br>
        <br>

        <div class="container text-center">
            <h1>Post the details of your daily workout</h1>
            <h1>Or try out one of the posted workouts</h1>
        </div>

        <br>

        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <AddEvent />
                </div>
                <div class="col-sm-6">
                    <EventItem
                            v-for="(event_item, index) in this.$store.state.events"
                            :event="event_item"
                            key="index"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {firebaseApp, eventsRef} from "../firebaseApp";
    import AddEvent from './AddEvent'
    import EventItem from './EventItem'

    export default {
        beforeCreate: function() {
            document.body.className = 'shop';
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


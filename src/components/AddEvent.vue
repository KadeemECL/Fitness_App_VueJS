<template>
<div class="col-sm-10">
    <h4>Add a Workout <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="event.title">
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="event.description">
        </div>
        <button class="btn-sm btn-primary" @click="addEvent">Submit</button>
    </div>
</div>
</template>
<script>
    import {eventsRef} from "../firebaseApp";

    export default {
        data() {
            return {
                event: {
                    title: '',
                    description: ''
                },
                showForm: true
            }
        },

        methods: {
            addEvent(){
                this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event)
            }
        }
    }

</script>

<template>
<div class="col-sm-10">
    <h4>Add a Meal <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="meal.title">
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model="meal.description">
        </div>
        <button class="btn-sm btn-primary" @click="addMeal">Submit</button>
    </div>
</div>
</template>
<script>
    import {mealsRef} from "../firebaseApp";

    export default {
        data() {
            return {
                meal: {
                    title: '',
                    description: ''
                },
                showForm: true
            }
        },

        methods: {
            addMeal(){
                this.meal.email = this.$store.state.user.email;
                mealsRef.push(this.meal)
            }
        }
    }

</script>

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
            <h1>Post the details of your meal plan</h1>
            <h1>Or try out one of the posted meal plans</h1>
        </div>

        <br>

        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <AddMeal />
                </div>
                <div class="col-sm-6">
                    <MealItem
                            v-for="(meal_item, index) in this.$store.state.meals"
                            :meal="meal_item"
                            key="index"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {firebaseApp, mealsRef} from "../firebaseApp";
    import AddMeal from './AddMeal'
    import MealItem from './MealItem'

    export default {
        beforeCreate: function() {
            document.body.className = 'form';
        },
        methods: {
            signOut() {
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        },


        components: {
            AddMeal,
            MealItem
        },
        mounted() {
            mealsRef.on('value', snap => {
                let meals = []
                snap.forEach(meal => {
                    meals.push(meal.val())
                })
                this.$store.dispatch('setMeals', meals)
            })
        }
    }
</script>

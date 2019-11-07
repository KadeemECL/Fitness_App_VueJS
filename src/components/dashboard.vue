<template>
    <div class="">
        <div class="navStyle">
            <button class="signout float-right" @click="signOut">Sign Out</button>
            <router-link class="navLinks pl-5" to="/dashboard">Home</router-link>
            <router-link class="navLinks float-right pr-4" to="/shop">Workout</router-link>
            <router-link class="navLinks float-right pr-4" to="/form">Nutrition</router-link>
        </div>

        <div class="row container-fluid">
            <div class="col-sm-12 pt-5">
                <h1 class="text-center">Come With Me If You Want To Lift</h1>
                <br>
                <p class="text-center">Learn from other fitness enthusiasts</p>
                <br>
                <div class="row">
                    <div class="col-lg-4 text-center">
                        <h2>Workout of the Day</h2>
                        <h4>Squats</h4>
                        <p>4 set of 6 - 8 reps</p>
                        <h4>Dead Lift</h4>
                        <p>4 set of 6 - 8 reps</p>
                        <h4>Calve Raises</h4>
                        <p>4 set of 6 - 8 reps</p>
                    </div>
                    <div class="col-lg-4 text-center">
                        <h2>Meal of the Day</h2>
                        <h4>Peanut Butter ( 2 tbsp )</h4>
                        <p>188 cal, 8g protein</p>
                        <h4>Oatmeal ( 1 cup )</h4>
                        <p>158 cal, 6g protein</p>
                        <h4>Quinoa ( 1 cup )</h4>
                        <p>222 cal, 8g protein</p>
                    </div>
                    <div class="col-lg-4 text-center">
                        <h2>Accessory of the Day</h2>
                        <h4>Optimum Nutrition Whey</h4>
                        <p>Check it out</p>
                        <h4>Nike Running Shoes</h4>
                        <p>Check it out</p>
                        <h4>Dead Lift Back Brace</h4>
                        <p>Check it out</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {firebaseApp} from "../firebaseApp";

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
    }
</script>

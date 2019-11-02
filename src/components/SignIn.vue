<template>
    <div class="signInOut">
        <h3 style="color: white">Sign In</h3>
        <div class="form-group">
            <input type="text" placeholder="email" class="form-control" v-model="email" />
            <input type="password" placeholder="password" class="form-control" v-model="password">
            <button class="btn btn-primary" @click="signIn">Sign In</button>
            <br>
            <p>{{error.message}}</p>
            <br>
            <router-link to="/signup">Not a user? Sign up</router-link>
        </div>
    </div>
</template>

<script>
    import {firebaseApp} from "../firebaseApp"

    export default {
        beforeCreate: function() {
            document.body.className = 'signin';
        },
        data(){
            return{
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },
        methods: {
            signIn(){
                firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error
                    })
            }
        }
    }
</script>
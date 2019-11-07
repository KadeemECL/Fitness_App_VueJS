<template>
    <div class="signInOut">
        <div class="navStyle pl-5"><p>Come With Me If You Want To Lift</p></div>
        <div class="form-group pl-5 pt-5">
            <h3 style="color: white">Sign In</h3>
            <input type="text" placeholder="email" class="form-control col-lg-4 col-sm-8 pl-15" v-model="email" />
            <br>
            <input type="password" placeholder="password" class="form-control col-lg-4 col-sm-8 pl-15" v-model="password">
            <br>
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

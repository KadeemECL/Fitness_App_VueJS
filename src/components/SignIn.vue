<template>
    <div class="signInOut">
<!--        <div class="navStyle pl-5"><p>Come With Me If You Want To Lift</p></div>-->
        <div class="form-group p-5 col-lg-5 col-md-6 col-sm-10 mt-5 ml-5 form-contents">
            <h4>Come With Me If You Want To Lift</h4>

            <p style="color: black">Sign in to your account</p>
            <input type="text" placeholder="email" class="form-control col-lg-6 col-sm-8 pl-15" v-model="email" />
            <br>
            <input type="password" placeholder="password" class="form-control col-lg-6 col-sm-8 pl-15" v-model="password">
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

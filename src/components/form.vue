<template>
    <div class="">
        <div class="router">
            <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
            <router-link class="btn btn-primary btn-sm" to="/dashboard">Home</router-link>
            <router-link class="btn btn-primary btn-sm" to="/shop">Shop</router-link>
        </div>

        <br>
        <br>

        <div class="videos">
            <h3>Learn</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eE7dzM0iexc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/89e518dl4I8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8fvT3sYfzLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RjexvOAsVtI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DHD1-2P94DI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </div>
</template>

<script>

    export default {
        beforeCreate: function() {
            document.body.className = 'watch';
        },
        methods: {
            signOut() {
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut()
            }
        },
    }
</script>
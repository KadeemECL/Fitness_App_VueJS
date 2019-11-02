<template>
    <div class="">
        <div class="router">
            <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
            <router-link class="btn btn-primary btn-sm" to="/form">Learn</router-link>
            <router-link class="btn btn-primary btn-sm" to="/dashboard">Home</router-link>
        </div>

        <br>
        <br>

        <div>

            <h2>Supplements</h2>
            <div>
                <a target="_blank" href="https://www.amazon.com/Optimum-Nutrition-Standard-Protein-Chocolate/dp/B000QSNYGI/ref=sr_1_1_sspa?crid=24OMXE8EN2IWR&keywords=gold+standard+whey+protein&qid=1568188819&s=gateway&sprefix=gold+sta%2Caps%2C173&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2N1BKTktEMEI0UVMmZW5jcnlwdGVkSWQ9QTA3MDU5OTRUMTFRREs4OFdRNDUmZW5jcnlwdGVkQWRJZD1BMDIzNjUyNjNUTTY3WEU3SzdWVFImd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"><img class="shopImage" src="/image/Whey.jpg" alt=""></a>
                <br>
                <br>
                <a target="_blank" href="https://www.amazon.com/Optimum-Nutrition-Micronized-Monohydrate-Unflavored/dp/B002DYIZEO/ref=sr_1_4?crid=21CXWNQ0VKB1L&keywords=creatine&qid=1568190000&s=gateway&sprefix=crea%2Caps%2C172&sr=8-4"><img class="shopImage" src="/image/creatine.jpg" alt=""></a>
                <br>
                <br>
                <a target="_blank" href="https://www.amazon.com/NUTRITION-Standard-Pre-Workout-Creatine-Beta-Alanine/dp/B00PYB2X8C/ref=sxin_3_osp104-e07d99b2_cov?ascsubtag=e07d99b2-92c0-4e34-bb5b-7b0c4b213dd1&creativeASIN=B00PYB2X8C&crid=11TES4KLFNA4J&cv_ct_id=amzn1.osp.e07d99b2-92c0-4e34-bb5b-7b0c4b213dd1&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=pre+workout&linkCode=oas&pd_rd_i=B00PYB2X8C&pd_rd_r=7116762d-7ade-41f8-8fdc-97c46e25e785&pd_rd_w=vss5I&pd_rd_wg=G1F3T&pf_rd_p=4ba5fbe3-1d1a-4339-9600-c9708eb9301d&pf_rd_r=1N92YV8MKP33NMM95NGG&qid=1568192396&s=gateway&sprefix=pre+wo%2Caps%2C175&tag=scrippsonsite-20"><img class="shopImage" src=/image/pre.jpg alt=""></a>

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


    }
</script>
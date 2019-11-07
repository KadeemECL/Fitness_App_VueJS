<template>
    <div class="col-md-10 eventStyle">
        <div class="event-card">
            <h4 class="card-title">{{event.title}}</h4>
            <p class="card-text" >{{event.description}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['event']
    }


</script>

<style>
    .eventStyle{
        border: black 1px solid;
        display: inline-block;
        margin: 5px 0 0 5px;
    }
</style>

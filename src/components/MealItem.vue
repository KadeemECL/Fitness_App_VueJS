<template>
    <div class="col-md-10 eventStyle">
        <div class="event-card">
            <h4 class="card-title">{{meal.title}}</h4>
            <p class="card-text">{{meal.description}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['meal']
    }
</script>

<style>
    .eventStyle{
        border: black 1px solid;
        display: inline-block;
        margin: 5px 0 0 5px;
    }
</style>

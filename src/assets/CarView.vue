
<script setup> 
import cars from "../data/cars.json"; 
import { RouterView } from "vue-router";
import { useRoute } from 'vue-router'; 
const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id)); 

</script>
<template> 
    <div> 
        <h1> Car view </h1>
        <p> {{car.name}}</p> 
        <p> {{ car.year }}</p>
        <p> {{ car.price }}</p> 
        <RouterView/>
    </div>
</template>
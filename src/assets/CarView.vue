<script setup>
import cars from "../data/cars.json";
import { RouterView } from "vue-router";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const r = useRouter();

const car = cars.find(c => c.id === parseInt(route.params.id));
const carId = parseInt(route.params.id);
const showContact = () => {
    if (carId === 4) {
        return;
    }
    r.push(`/cars/${carId}/contact`);
};
</script>
<template>
    <div v-if="car">
        <h1> Car view </h1>
        <p> {{ car.name }}</p>
        <p> {{ car.year }}</p>
        <p> {{ car.price }}</p>
        <button @click="showContact()"> Click me for Contact </button>
        <RouterView />
    </div> 
    <h1 v-else> Car not found </h1>
</template>
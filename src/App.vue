
<script setup>  
import {RouterView} from "vue-router" 
import Nav from "./components/nav.vue" 
import {ref} from "vue" 
const randomState = ref("");
</script>

<template> 

<div> 
  {{ randomState }} 
  <button @click="randomState = 'Hello state'" > click me </button>
  <Nav/>
  <RouterView/>
</div>
</template>
import { createRouter , createWebHistory} from "vue-router"; 
import HomeView  from "../assets/HomeView.vue"
import AboutView from "../assets/AboutView.vue"; 
import CarView from "@/assets/CarView.vue";
import ContactView from "@/assets/ContactView.vue";


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : "/",
            name : "home",
            component : HomeView
        },
        {
            path: "/about",
            name : "about",
            component : AboutView
        },
        {
            path: "/cars/:id",
            name : "car",
            component : CarView ,
            children:[
                {
                    path: "contact",
                    component : ContactView
                }
            ]
        }
    ]
});

export default router;

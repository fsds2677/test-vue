import HelloWorld from '@/components/HelloWorld.vue';
import HelloWorlda from '@/components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        HelloWorlda
    }
}
let app = new Vue({
    el: '#app',
    data:{
        name: 'ABC'
    }
})
<template>
    <div class="Hook1">
        <h1>Posts</h1>
        <hr>
        <div v-for="post in posts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{ $filters.body(post.body) }}</p>
        </div>
    </div>
</template>

<script>
import axios from'axios'
export default {
    name: "HooK1",
    data(){
        return {
            posts:[]
        }
    },
    methods:{
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                this.posts = response.data
            })
            .catch(error=>{
                console.log(error)
            })
    }
}
</script>

<style scoped>
h1{
    color: red;
    text-align: center;
}
</style>
<template>
    <div id="app">
        <h2>{{ title }}</h2>
        <Navbar></Navbar>
        <AllFriends :friends="friends" @delete="deleteFriend"></AllFriends>
        <OnlineFriends :friends="friends"></OnlineFriends>
        <Hook></Hook>
        <Hook1></Hook1>
    </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'
import Hook from './components/Hook.vue'
import Hook1 from './components/Hook1.vue'
export default {
    name: 'App',
    data(){
        return {
            title: 'test aaaaaa',
            friends:[
                {name: 'A', online:true},
                {name: 'B', online:false},
                {name: 'C', online:true},
                {name: 'D', online:true},
                {name: 'E', online:false}
            ]
        }
    },
    components:{
        Navbar,
        AllFriends,
        OnlineFriends,
        Hook,
        Hook1
    },
    methods:{
        deleteFriend(payload){
            // console.log(payload)
            this.friends = this.friends.filter(friend => {
                return friend.name !== payload.name
            })
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

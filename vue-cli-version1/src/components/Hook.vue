<template>
    <div class="Hook">
        <h1>{{title}}</h1>
        <button @click="ChanageTitle">Click Me</button>
    </div>
</template>

<script>
export default {
    name: "HooK",
    data(){
        return {
            title: 'Hook Main Data'
        }
    },
    methods:{
        ChanageTitle(){
            this.title = 'easy'
        }
    },
    beforeCreate(){
        alert("a")
    },
    created(){
        alert("b")

    },
    beforeUpdate() {
        alert('c')
    }
}
</script>

<style>

</style>
<template>
    <div class="block" v-if="showBlock" @click="stoptimer">
        click me
    </div>  
</template>

<script>
export default {
    props:['delay'],
    data(){
        return{ 
            showBlock:false,
            timer:null,
            reactionTime:0
        }
    },
    mounted(){
        //fires when component is mounted
        setTimeout(()=>{
            this.showBlock = true
            this.startTimer()
            console.log(this.delay)
        }, this.delay)
    },
    // updated(){
    //     //fires when any data in the component is updated
    //     console.log("The component has been updated")
    // },
    // unmounted(){
    //     console.log('unmounted')
    // }

    methods:{
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime += 10
            },30)

        },
        stoptimer(){
            clearInterval(this.timer)
            console.log("Reaction time", this.reactionTime)
            this.$emit('end', this.reactionTime)
        }
    }


}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 29px;
        background: green;
        color: antiquewhite;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>
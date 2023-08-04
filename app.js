//vue app - controlls a certain part or the full page

const app = Vue.createApp({
    //data, functions, template
    // template:'<h2>Hey Trev</h2>'
    data(){
        return{
            title:"The final empire",
            age:1,
            show:'false'
        }
    },
    methods:{
        changeTitle(her){
            this.title = her
        }
    }
}) //creates vue app

app.mount('#app')//where to mount app in the dom
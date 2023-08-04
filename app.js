//vue app - controlls a certain part or the full page

const app = Vue.createApp({
    //data, functions, template
    // template:'<h2>Hey Trev</h2>'
    data(){
        return{
            title:"The final empire",
            age:1,
            show:'false',
            books:[
                {title:'Asiko', author: 'Trevor',img:'assets/1.png',isFav: true},
                {title:'Ashley', author: 'Ogina',img:'assets/2.png',isFav: false},
                {title:'Achieng', author: 'Lennox ',img:'assets/3.png',isFav: true},
            ]
        }
    },
    methods:{
        changeTitle(her){
            this.title = her
        },
        toggleFav(book){
          book.isFav = !book.isFav   
        }
    },
    computed:{
        filteredBooks(){
            return  this.books.filter((book)=>book.isFav)
        }
    }
}) //creates vue app

app.mount('#app')//where to mount app in the dom
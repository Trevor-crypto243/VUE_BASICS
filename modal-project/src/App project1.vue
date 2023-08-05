<template>
  <div>
    <h1>{{title}}</h1>
    <p>Wellcome...</p>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">Click me</button> -->
    <teleport to=".modals" v-if="showModal">
      <Modal theme="" @close="toggleModal">
        <template v-slot:links>
            <a href="#">Sign up now</a>
            <a href="#">More info</a>
        </template>
        <h1>Ninja Give away</h1>
        <p>Grab your ninja swag for half price</p>
      </Modal>
    </teleport>
    <button @click="toggleModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components:{
      Modal
    },
    data(){
      return{ 
        title:"My first Vue App",
        showModal:false
      } 
    },

    methods:{
      handleClick(){
        console.log(this.$refs.name)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus();
      },
      toggleModal(){
        this.showModal = !this.showModal
      }
    }
  }
</script>

<style>
#app, .modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

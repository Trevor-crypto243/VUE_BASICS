_____________Reactivity
unlike in react where you use the useState, in vue you use the ref with the composition api to declare state
<script setup>
    import {ref} from "vue";
    const name = ref("john")
    name.value = "Trevor" //updating state in vue
</script>

<template>
    <h1>hello {{name}}</h1>
</template> 

    ___computed property
    -State derived from other state values
<script setup>
    import {ref, computed} from "vue";
    const count = ref(10);
    const double = computed(()=> count.value * 2)
</script>

<template>
    <div>{{doubleCount}}</div>
</template>

_____________Templating
<template> //defines html structure
    <h1>Hello World</h1>
</template>
Styling in vue js


_________Looping over an array and rendering
<script setup>
    const colors = ["red","green","blue"]
</script>

<template>
    <ul>
        <li v-for="color in colors" :key="color">{{color}}</li>
    </ul>
</template>


___________handling Events
<script setup>
    import {ref} from "vue";
    const count = ref(0);

    function incrementCount(){
        count.value++;
    }
</script>

<template>
<p>Counter : {{count}} </p>
<button @click="incrementCount">+1</button>
</template>


______DOM Ref
<script setup>
import {useTemplateRef, onMounted } from "vue";
const inputElement = useTemplate("inputElement");

onMounted(() => { inputelement.value.focus();});
</script>

<template>
    <input ref="inputElement">
</template>


________Conditional rendering
<script setup>
import {ref, computed} from "vue";
const TRAFFIC_LIGHTS = ["red","orange","green"]
const lightIndex = ref(0);

const light = computed(() => TRAFFIC_LIGHTS[lightIndex.value]);

function nextLight(){
    lightIndex.value = (lightIndex.value + 1) % TRAFFIC_LIGHTS.length;
}
</script>

<template>
<button @click="nextLight">Next light</button>
<p>Light is: {{light}}</p>
<p>You must
<span v-if="light === 'red'">STOP</span>
<span v-else-if="light === 'red'">STOP</span>
<span v-else-if="light === 'red'">STOP</span>
</p>
</template>

_______Vue js directives
-Look at vue js directives

_____________Lifecycle
_____onMounted() //runs after component has been mounted. Similar to a use effect
<script setup>
    import {ref, onMounted} from "vue";
    const pageTitle = ref();
    onMounted(()=>{
        pageTitle.value = document.title
    })
</script>

<template>
    <p>Page Title: {{pageTitle}}</p>
</template>


______onUnmounted() //when component is destroyed, handling clean up logic
<script setup>
import {ref, onUnmounted} from "vue";
const time = ref(new Date().toLocaleTimeString());

const timer =  setInterval(()=>{
    time.value =  new Date().toLocaleTimeString();
},1000);


onUnmounted(() => {
    clearInterval(timer);
})
</script>

<template>
    <p>Current time: {{time}} </p>
</template>


_________Props
//parent
<script setup>
    import Userprofile from "./userprofile.vue";
</script>

<template>
    <UserProfile 
    name="Trevor Ogina"
    :age="24" //colon for binding
    :favourite-colors="['green','blue','red']"
    is-available //for boolean we can just define the attribute without the valuem
    />
</template>



//child
<script setup>
    const props = defineProps({
        name: {type: String, required: true, default: ""},
        age:{type:Number, required: true, default: null},
        favouriteColors:{type: Array, required: true, default: () => []},
        isAvailable:{type: Boolean, required: true, default: false}
    })
</script>

<template>
<p>My name is {{ props.name }} </p>
<p>My age is {{props.age}}</p>
<p>My fave color is {{ props.faveColors.join()}}</p>
<p>I am {{ props.isAvailable ? "available" : "not available"}} </p>
</template> 



_______calling parent functions
We use the emit function 

//parent
<script setup>
    import {ref} from "vue";
    import AnswerButton from "./AnswerButton.vue";

    let isHappy = ref(true);

    function onAnswerNo(){
        isHappy.value = false;
    }

    function onAnswerYes(){
        isHappy.value = true
    }
</script>

<template>
<p>Are you happy?</p>
<AnswerButton @yes="onAnswerYes" @no="onAnswerNo">
<p style="font-size: 50px">{{ isHappy ? "ha" : "ho" }}</p>
</template>


//child
<script setup>
    const emit = defineEmits(["yes","no"]);

    function clickYes(){
        emit("yes");
    }

    function clickNo(){
        emit("no")
    }

</script>
<template>
<button @click="clickYes">YES</button>
<button @click="clickNo">NO</button>
</template>


_________Content projection/ Slots
Pass content from a parent compoennt to a child component 
Enhances component reusbaility


//parent
<script setup>
    import FunnyButton  from "./FunnyButton.vue";
</script>

<template>
    <FunnyButton>
    Click Me!  //passed to the slot
    </FunnyButton>
</tempate>


//Child
<template>
<button style="background: rgba(0,0,0,0.4);color: #fff;">
    <slot />

    <slot>
    <span>No content found</span> //fallback content when no children are provided
    </slot>
<button>
</template>

_________Form inputs and data bindings
<script setUp>
    import {ref} from "vue";
    const text = ref("Hello World");
</script>

<template>
    <p>{{text}}</p>
    <input v-model="text">
</template>

_____________Component Composition


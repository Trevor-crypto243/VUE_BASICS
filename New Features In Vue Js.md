_________New Features Vue js
___________ Composition Api
A more flexible way to organize component logic compared to the Options API.
    ____Reactivity with ref and reactive
    import { ref, reactive } from 'vue';

    const count = ref(0);
    const state = reactive({ name: 'Vue 3' });

    ____Better code resusability with computed and watch
    const doubled = computed(() => count.value * 2);
    watch(count, (newVal) => console.log(newVal));

    ___lifecycle hooks as functions
    onMounted(() => console.log('Component mounted!'));


________Set Up
A compile-time syntactic sugar for Composition API, reducing boilerplate.
<script setup>
import { ref } from 'vue';
const msg = ref('Hello Vue 3!');
</script>

<template>
  <h1>{{ msg }}</h1>
</template>


____________ Teleport <Teleport> 
Render a component's content in a different part of the DOM

_____________Suspense 
 Handle async component loading with fallback UI
        <template>
        <Suspense>
            <template #default>
            <AsyncComponent />
            </template>
            <template #fallback>
            <div>Loading...</div>
            </template>
        </Suspense>
        </template>

__________Fragments(Multiple Root Nodes)
Components can now return multiple root elements
    <template>
    <header></header>
    <main></main>
    <footer></footer>
    </template>

_______Better typescript Support
Built-in TypeScript typing.
Improved type inference with Composition API.


________Emits Option
Explicit event declaration
    export default {
    emits: ['submit', 'cancel'], // Explicitly declare events
    methods: {
        handleSubmit() {
        this.$emit('submit', data);
        }
    }
    }


___________V-model improvements
    ____Multiple v-model bindings
    <ChildComponent v-model:title="title" v-model:content="content" />

    ____Custom Modifiers
    app.directive('uppercase', (el, binding) => {
        el.value = el.value.toUpperCase();
    });

______________New Built In Components
<Transition> & <TransitionGroup> for animations.
<KeepAlive> for component caching.


___________Vite as a default build tool
Faster builds and HMR (Hot Module Replacement) with Vite.


_________Pinia(Official State management)
Simpler alternative to Vuex.
TypeScript-friendly.
Built-in Composition API support.




________Slot
layout set up, like ngcontent in angular
Adding slots for differnt items
using <template> to fill in the slots

base component patterns
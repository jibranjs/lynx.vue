<template>
<component
:is="is"
:class="[
    'font-bold',
    sizeClass,
    alignClass,
    colorClass,
    PaddingBottom
]">
    <slot />
</component>
    </template>


<script setup>
import { computed } from 'vue';


const props = defineProps({
    is: {
        type: String,
        default: 'h2'
    },
    size: {
        type: String,
        default: 'xl'
    },
    align: {
        type: String,
        default: 'left'
    },
    color: {
        type: String,
        default: 'black'
    },
    pb:{
        type:String,
        default: 'pb-2'
    }
})

const sizeClass = computed(()=> ({
    'sm': 'text-md',
    'md': 'text-xl',
    'lg': 'text-2xl',
    'xl': 'text-3xl'
}[props.size]))

const alignClass = computed(()=> ({
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
}[props.align]))

const colorClass = computed(()=> ({
    'black': 'text-black',
    'white': 'text-white',
    'pink': 'text-[#FD04B1]'
}[props.color]))
const PaddingBottom = [props.pb]
</script>
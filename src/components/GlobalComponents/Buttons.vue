<template>
<component
:is="is"
:class="[
    'py-2',
    'px-3',
    bgClass,
    borderClass,
    textClass,
    roundedClass
]">
    <slot />
</component>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    is:{
        type: String,
        default:'button'
    },
    bg: {
        type: String,
        default: '[#FD04B1]'
    },
    border: {
        type: String,
        default: 'none'
    },
    text: {
        type: String,
        default: 'white'
    },
    rounded:{
        type: String,
        default: 'rounded'
    }
})

const bgClass = computed(()=>({
    'white':'bg-white',
    'pink':'bg-[#FD04B1]'
}[props.bg]))

const borderClass = computed(()=>({
    'bordered':'border border-[#FD04B1]',
    "bordernone":'border-none'
}[props.border]))

const textClass = computed(()=>({
    'lg':'text-lg',
    "txpink":'text-[#FD04B1]',
    "txwhite":'text-white'
}[props.text]))

const roundedClass = [props.rounded]
</script>
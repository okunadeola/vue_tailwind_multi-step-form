<script setup lang="ts">


const emit = defineEmits<{
    (event: 'action'): void
}>()

defineProps<{
    step: number
}>()

const fireEmitter = ()=>{
    emit('action')
}
</script>

<template>
    <div>
        <button @click="fireEmitter" class=' bg-color-primary-marine-blue text-color-Magnolia outline-none px-6 py-3 rounded-lg hover:text-color-primary-light-blue'> {{step === 3 ? 'Confirm' : 'Next Step'}}  </button>
    </div>
</template>

<style>

</style>
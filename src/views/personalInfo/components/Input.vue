<script setup lang="ts">
import { BaseInputBinds } from 'vee-validate';


defineProps<{
    name:string,
    type:string,
    label:string,
    error:string | undefined,
    placeholder:string,
    binder: BaseInputBinds
}>()
</script>

<template>
    <div>

        <div class='flex justify-between mb-2'>
            <label for={name} class='text-color-primary-marine-blue text-md font-medium'>{{label}}</label>
            <div :class="error ? 'block' : 'hidden'" class="text-color-berry-red font-medium">{{ error }} </div>
        </div>

        <input class="border  p-3 inset-0 outline-none w-full rounded-xl" :class="error ? 'border-color-berry-red' : 'border-color-light-gray'" 
        v-bind="binder"
        :type="type" :placeholder="placeholder" :name="name"    />

    </div>
</template>

<style>

</style>
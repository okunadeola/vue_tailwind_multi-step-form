<script setup lang="ts">
import { Addon } from '../../../model';



defineProps<{
    isYear: boolean,
    options: Addon[]
    addons: Addon[]
}>()


const emit = defineEmits<{
    (event:"selectAddon", id: number): void
}>()
 

emit('selectAddon', 3)
</script>

<template>
    <div className='flex flex-col gap-y-3'>

        <label for="checkb" v-for="opt of options" :key="opt.id">
            <button @click="emit('selectAddon', opt.id)" type='button'  class="flex py-3 px-2 text-start w-full gap-2 border rounded-lg h-[60%] xlg:h-full  justify-between items-center hover:border-color-primary-purple-blue overflow-hidden" :class="addons?.some(it=> it.id === opt.id) && ' border-color-primary-purple-blue'">
                <div class='flex gap-x-5'>
                    <input readOnly class='w-5 
                     checked:bg-color-primary-purple-blue
                    bg-color-primary-purple-blue text-color-primary-purple-blue' :checked="addons?.some(it=> it.id === opt.id) && true" type="checkbox"  id="checkb" />
                    <div class='flex flex-col justify-start items-start'>
                        <div class=' font-medium text-lg text-color-primary-marine-blue'>{{opt.name}}</div>
                        <div class=' text-color-cool-gray'>{{opt.desc}}</div>
                    </div>  
                </div>
                <div class='text-color-primary-purple-blue'>+${{
                    isYear ? opt?.yearly : opt.monthly}}/   {{
                        isYear ? 'yr' : 'mo'
                    }}</div>
            </button>
        </label>
      </div>
</template>

<style>

</style>
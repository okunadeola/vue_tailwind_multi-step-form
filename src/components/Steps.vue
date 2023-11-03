<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMultistep } from '../store/multistep';


const multistepStore = useMultistep()

const {subscriptionData: state} = storeToRefs(multistepStore);
const stepInfo = [
        {
            stepNo: 1,
            stepDesc: 'your info'
        },
        {
            stepNo: 2,
            stepDesc: 'select plan'
        },
        {
            stepNo: 3,
            stepDesc: 'add-ons'
        },
        {
            stepNo: 4,
            stepDesc: 'summary'
        },
    ]

</script>

<template>
    <div class='flex xlg:flex-col gap-y-7 justify-center xlg:justify-start gap-x-5  xlg:gap-x-0 '>
        <div 
            v-for="stp of stepInfo" :key="stp.stepNo" @click="state.       isCompleted && multistepStore.seekStep(stp.stepNo -1)"

            class="flex items-center gap-x-4"
            :class="state.isCompleted && 'cursor-pointer'"
        >

            <div
                class="p-5 w-9 h-9 border-2 flex items-center justify-center border-color-primary-light-blue  rounded-full font-medium text-lg"
                :class="state?.step +1 == stp.stepNo ||( stp.stepNo === 4 && state?.step === 4)  ? 'bg-color-primary-light-blue text-color-primary-marine-blue' : 'text-color-primary-light-blue'"
            >
                {{ stp.stepNo }}
            </div>
            <div class=' hidden xlg:block'>
                <div class=' text-color-primary-pastel-blue text-sm'>STEP {{stp.stepNo}}</div>
                <div class=' font-medium text-color-whiten text-sm'>{{stp?.stepDesc?.toLocaleUpperCase()}}</div>
            </div>

        </div>
    </div>
</template>

<style>

</style>
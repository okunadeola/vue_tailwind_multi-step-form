import { defineStore } from "pinia";
import { ref } from "vue";
import { initialValue } from "./initialData";
import { Addon, MultiStepData, NextActionProp, PersonalInfo, Plan } from "../model";


export const useMultistep = defineStore('mutistep-form', ()=>{
    const subscriptionData = ref<MultiStepData>(initialValue())


    const proceedToNextStep = (data : PersonalInfo | Plan | Array<Addon>, target: NextActionProp) =>{

        switch (target) {
            case NextActionProp.PERSONAL:
                let theData = data as PersonalInfo
                const latest = {...subscriptionData.value, personalInfo: {...theData}, step: subscriptionData.value.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(latest))
               return subscriptionData.value = latest
              
            case NextActionProp.PLAN:
                let planData = data as Plan
                const snapshot = {...subscriptionData.value, plan: {...planData}, step: subscriptionData.value.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(snapshot))
               return subscriptionData.value = snapshot
              
            case NextActionProp.ADDON:
                let addonData = data as Array<Addon>
                const current = {...subscriptionData.value, addons: [...addonData], step: subscriptionData.value.step + 1 }
                localStorage.setItem('multistep', JSON.stringify(current))
               return subscriptionData.value = current
              
            default:
                break;
        }

    }

    const goToPrevStep = ()=>{
        const current = {...subscriptionData.value, step: subscriptionData.value.step - 1 }
        localStorage.setItem('multistep', JSON.stringify(current))
        return subscriptionData.value = current
    }


    const goToPlanUI = ()=>{
        const current = {...subscriptionData.value, step: 1}
        localStorage.setItem('multistep', JSON.stringify(current))
        return subscriptionData.value = current
    }




    const completeStep = ()=>{
        const current = {...subscriptionData.value, step: 4, isCompleted: true}
        localStorage.setItem('multistep', JSON.stringify(current))
        return subscriptionData.value = current
    }



    const seekStep = (value: number)=>{
        const current = {...subscriptionData.value, step: value}
        localStorage.setItem('multistep', JSON.stringify(current))
        return subscriptionData.value = current
    }


    




    return { 
        subscriptionData,
        proceedToNextStep,
        goToPrevStep,
        goToPlanUI,
        completeStep,
        seekStep
      }


})
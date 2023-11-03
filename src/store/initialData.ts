import { MultiStepData } from "../model"


export const initialValue = ():MultiStepData=>{
    const storedData = window.localStorage.getItem('multistep')

    return storedData ? JSON.parse(storedData) : {
        step: 0,
        personalInfo: {
            name: '',
            email: '',
            phone: ''
        },
        plan: {
            planName: '',
            planAmount: 0,
            planDuration: 'monthly'
        },
        addons: [],
        total: 0,
        isCompleted: false
    }
}
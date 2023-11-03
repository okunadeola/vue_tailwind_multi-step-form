

export interface MultiStepData {
    step: number,
    personalInfo: PersonalInfo,
    plan: Plan,
    addons: Array<Addon>,
    total: number,
    isCompleted: boolean 
}


export type PersonalInfo = {
    name: string,
    email: string,
    phone: string
}

export type Plan ={
    planName: string,
    planAmount: number,
    planDuration: string
}

export type Addon = {
    id: number,
    name: string,
    desc: string,
    yearly: number,
    monthly: number
}


export enum NextActionProp {
    PERSONAL,
    PLAN,
    ADDON
}


export type PlanOption = {
    image: string,
    name: string,
    monthly: number,
    yearly: number,
    id: number
}
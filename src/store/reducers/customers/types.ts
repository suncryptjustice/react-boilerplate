import { Customer } from "../../../models/Customer"

export interface CustomersState {
    customers: Customer[]
    ageFilter: number
}

export enum CustomersActionEnum {
    SET_CUSTOMERS = "SET_CUSTOMERS",
    APPLY_ageFilter = "APPLY_ageFilter",
}

export interface SetCustomersAction {
    type: CustomersActionEnum.SET_CUSTOMERS
    payload: Customer[]
}
export interface ApplyFilterAction {
    type: CustomersActionEnum.APPLY_ageFilter
    payload: number
}

export type CustomersAction = SetCustomersAction | ApplyFilterAction

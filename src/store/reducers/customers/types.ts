import { Customer } from "../../../models/Customer"

export interface CustomersState {
    customers: Customer[]
    ageFilter: number
}

export enum CustomersActionEnum {
    SET_CUSTOMERS = "SET_CUSTOMERS",
    APPLY_AGE_FILTER = "APPLY_AGE_FILTER",
}

export interface SetCustomersAction {
    type: CustomersActionEnum.SET_CUSTOMERS
    payload: Customer[]
}
export interface ApplyFilterAction {
    type: CustomersActionEnum.APPLY_AGE_FILTER
    payload: number
}

export type CustomersAction = SetCustomersAction | ApplyFilterAction

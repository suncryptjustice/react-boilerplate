import {
    CustomersActionEnum,
    SetCustomersAction,
    ApplyFilterAction,
} from "./types"
import { Customer } from "../../../models/Customer"

export const CustomersActionCreators = {
    setCustomers: (customers: Customer[]): SetCustomersAction => ({
        type: CustomersActionEnum.SET_CUSTOMERS,
        payload: customers,
    }),
    setAgeFilter: (ageFilter: number): ApplyFilterAction => ({
        type: CustomersActionEnum.APPLY_ageFilter,
        payload: ageFilter,
    }),
}

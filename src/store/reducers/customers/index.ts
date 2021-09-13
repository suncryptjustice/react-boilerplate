import { CustomersAction, CustomersActionEnum, CustomersState } from "./types"

const initialState: CustomersState = {
    customers: [],
    ageFilter: 99,
}

export default function authReducer(
    state = initialState,
    action: CustomersAction
): CustomersState {
    switch (action.type) {
        case CustomersActionEnum.SET_CUSTOMERS:
            return { ...state, customers: action.payload }
        case CustomersActionEnum.APPLY_AGE_FILTER:
            return { ...state, ageFilter: action.payload }
        default:
            return state
    }
}

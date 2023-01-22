import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                 state.sort((u, u2) => u.name.localeCompare(u2.name))
            } else {
               state.sort((u, u2) => u2.name.localeCompare(u.name))
            }
            return state
        }
        case 'check': {
            return state.filter((u)=> u.age >= action.payload)
        }
        default:
            return state
    }
}

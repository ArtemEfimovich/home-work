const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeType): typeof state => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state,themeId:action.id++}
        }
        default:
            return state
    }
}


export type ChangeThemeType={
    type:'SET_THEME_ID',
    id:number
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any

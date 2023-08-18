const initialState = {
    isOpen: false,
    content: "",
    typeToast: 'success', // Mặc định là success
}



export const NotificationReducers = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_NOTIFICATION':
            return{
                ...state,
                isOpen: true,
                content: action.payload.content,
                typeToast: action.payload.typeToast,
            }
        case 'HIDE_NOTIFICATION':
            return{
                ...state,
                isOpen: false,
                content: "",
            }
        default:
            return state

    }
}



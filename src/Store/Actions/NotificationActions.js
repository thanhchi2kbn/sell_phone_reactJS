export const showNotification = ({content,typeToast}) =>{
    return{
        type: "SHOW_NOTIFICATION",
        payload: {
            content,
            typeToast,
        },
    }
}

export const hiedNotification = () =>{
    return{
        type: "HIDE_NOTIFICATION",
    }
}
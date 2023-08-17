export const showNotification = (content) =>{
    return{
        type: "SHOW_NOTIFICATION",
        payload: {
            content,
        },
    }
}

export const hiedNotification = () =>{
    return{
        type: "HIDE_NOTIFICATION",
    }
}
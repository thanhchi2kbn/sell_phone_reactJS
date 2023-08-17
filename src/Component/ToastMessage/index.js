import { Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { store } from '../../Store';
import { hiedNotification } from '../../Store/Actions/NotificationActions';

const ToastMessage = () => {
    const [notiStore, setNotiStore] = useState(store.getState().notification)
    const watchStore = () =>{
        store.subscribe(() => setNotiStore(store.getState().notification))
    }
    watchStore();
    const handleClose = () =>{
        store.dispatch(hiedNotification())
    }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: "right" }}
                open={notiStore.isOpen}
                onClose={handleClose}
                message={notiStore.content}
                autoHideDuration={3000}
            />
        </>
    );
}

export default ToastMessage;

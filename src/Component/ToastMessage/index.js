import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { hiedNotification } from '../../Store/Actions/NotificationActions';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"

const ToastMessage = () => {
    //cach 2: su dung react redux
    const notiStore = useSelector((store) => store.notification)
    const dispatch = useDispatch()


    // cach1: su dung redux core
    // const [notiStore, setNotiStore] = useState(store.getState().notification)
    // const watchStore = () =>{
    //     store.subscribe(() => setNotiStore(store.getState().notification))
    // }
    // watchStore();
    const handleClose = () => {
        dispatch(hiedNotification())
    }
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={notiStore.isOpen}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert
                    onClose={handleClose}
                    severity={notiStore.typeToast} // Sử dụng notiStore.type để định nghĩa màu sắc của Alert
                    sx={{ width: '100%', padding: '20px' }}
                >
                    {notiStore.content}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ToastMessage;

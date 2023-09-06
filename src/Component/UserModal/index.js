import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';
import UserModalContext from '../../Contexts/UserModalContext';
import UserApi from '../../Apis/UserApi';
const validationSchema = yup.object({
    email: yup
        .string('Enter product email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),

});

const UserModal = () => {

    const { isOpenModal, setIsOpenModal, initDataModal, handleSearch }
        = React.useContext(UserModalContext)
    // console.log(initDataModal)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: initDataModal.id ?? "",
            email: initDataModal.email ?? "",
            password: initDataModal.password ?? "",

        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
           if(values.id){
            await handleEditUser({id: values.id,email: values.email, password: values.password, 
            })

           }else{
            await handleCreateUser({
                email: values.email, 
                password: values.password
            })
           }
            await handleSearch()
        }

    });

    const handleClose = () => {
        setIsOpenModal(false)
    }

    const handleCreateUser = async ({ email, password }) => {
        await UserApi.create({
            email,
            password,
        })
    }

    const handleEditUser = async ({id, email, password }) => {
        await UserApi.updateByID(id,{
            email,
            password,
        })
    }
    return (
        <Dialog open={isOpenModal} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle id="alert-dialog-title">User Create/Update</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" name="email" label="Email" type="text" fullWidth variant="standard" value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField margin="dense" name="password" label="Password" type="text" fullWidth variant="standard" value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit' variant='contained' onClick={handleClose}>Save</Button>
                </DialogActions>
            </form>
        </Dialog>

    )
}

export default UserModal;

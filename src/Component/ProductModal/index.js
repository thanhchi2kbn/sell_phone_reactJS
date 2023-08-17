import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ProductModalContext from '../../Contexts/ProductModalContext';
import ProductDetailFields from './ProductDetailFields';
import { InputAdornment } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProductApi from '../../Apis/ProductApi';
var defaultImg = "https://doingoai.bacgiang.gov.vn/sites/default/files/dang-cap-nhat_4_3.png"
const validationSchema = yup.object({
    name: yup
        .string('Enter product name')
        .required('Product name is required'),
    image: yup
        .string('Enter your image')
        .required('Password is required'),

    price: yup
        .string('Enter product price')
        .required('Password is required'),
});

const ProductModal = () => {

    const { isOpenModal, setIsOpenModal, initDataModal, setInitDataModal, handleSearch }
        = React.useContext(ProductModalContext)
    // console.log(initDataModal)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: initDataModal.id ?? "",
            name: initDataModal.name ?? "",
            image: initDataModal.image ?? "",
            price: initDataModal.price ?? "",
            details: {
                brand:   "",
                operatingSystem: "",
                camera:  "",
                display: "",
                memory: "",
                color: "",
            }


        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
           if(values.id){
            await handleEditProduct({id: values.id,name: values.name, image: defaultImg, price: values.price, 
                details: {
                brand: values.brand,
                operatingSystem: values.operatingSystem,
                camera: values.camera,
                display: values.display,
                memory: values.memory,
                color: values.color,
            }

            })

           }else{
            await handleCreateProduct({
                name: values.name, image: defaultImg, price: values.price, details: {
                    brand: values.brand,
                    operatingSystem: values.operatingSystem,
                    camera: values.camera,
                    display: values.display,
                    memory: values.memory,
                    color: values.color,
                }
            })
           }
            await handleSearch()
        }

    });

    const handleClose = () => {
        setIsOpenModal(false)
    }

    const handleCreateProduct = async ({ name, image, price, details }) => {
        await ProductApi.create({
            name,
            image,
            price,
            details
        })
    }

    const handleEditProduct = async ({id, name, image, price, details }) => {
        await ProductApi.updateByID(id,{
            name,
            image,
            price,
            details
        })
    }
    return (
        <Dialog open={isOpenModal} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit}>
                <DialogTitle id="alert-dialog-title">Product Create/Update</DialogTitle>
                <DialogContent>
                    <TextField margin="dense" name="name" label="Name" type="text" fullWidth variant="standard" value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField margin="dense" name="image" label="Image" type="text" fullWidth variant="standard" value={formik.values.image}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.image && Boolean(formik.errors.image)}
                        helperText={formik.touched.image && formik.errors.image}
                    />
                    <p >Product Details:</p>

                    
                    <ProductDetailFields formik={formik}/>

                    <TextField
                        margin="dense"
                        name="price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">VND</InputAdornment>,
                        }}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}

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

export default ProductModal;

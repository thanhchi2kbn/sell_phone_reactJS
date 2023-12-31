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

    price: yup
        .string('Enter product price')
        .required('Password is required'),
});

const ProductModal = () => {

    const { refetch, isOpenModal, setIsOpenModal, initDataModal, pagingData, setPagingData }
        = React.useContext(ProductModalContext)
    const [imageB64, setImageB64 ] = React.useState("")
    // console.log(initDataModal)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: initDataModal.id ?? "",
            name: initDataModal.name ?? "",
            image: initDataModal.image ?? "",
            price: initDataModal.price ?? "",
            details: {
                brand:  initDataModal?.details?.brand ?? "",
                operatingSystem: initDataModal?.details?.operatingSystem ??"",
                camera:  initDataModal?.details?.camera ??"",
                display:  initDataModal?.details?.display ??"",
                memory: initDataModal?.details?.memory ?? "",
                color:initDataModal?.details?.color ?? "",
            }
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
           if(values.id){
            await handleEditProduct({id: values.id,name: values.name, image: imageB64?imageB64:initDataModal.image , price: values.price, 
                details: {
                brand: values.details.brand,
                operatingSystem: values.details.operatingSystem,
                camera: values.details.camera,
                display: values.details.display,
                memory: values.details.memory,
                color: values.details.color,
            }
            })


           }else{
            await handleCreateProduct({
                name: values.name, image: imageB64?imageB64:defaultImg, price: values.price, details: {
                    brand: values.details.brand,
                    operatingSystem: values.details.operatingSystem,
                    camera: values.details.camera,
                    display: values.details.display,
                    memory: values.details.memory,
                    color: values.details.color,
                }
            })

            
           }
            await setImageB64("")
            formik.resetForm()

            if(pagingData.currentPage === 0 || values.id){
                refetch();
            }
            else{
            setPagingData({
                ...pagingData,
                currentPage: 1
            })
            }

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

   
    const handleFile = (event) => {
        var reader = new FileReader();
        reader.onloadend =  function(){
            setImageB64(reader.result);
        }
        reader.readAsDataURL(event.target.files[0])    
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
                    
                    {imageB64? (<img src={imageB64}  style={{width:"100px",height:"100px" }} alt='img'></img>):(
                    <Button variant='contained' component="label">
                        Upload File
                        <input type='file' hidden onChange={handleFile}/>
                    </Button>
                    )}

                    {/* <InputFileUpload/> */}
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

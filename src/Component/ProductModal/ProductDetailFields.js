import React from "react";
import { MenuItem, TextField } from "@mui/material";
import * as yup from 'yup';

export const productDetailValidationSchema = yup.object({
  camera: yup.string().required('Camera is required'),
  display: yup.string().required('Display is required'),
  memory: yup.string().required('Memory is required'),
  color: yup.string().required('Color is required'),
});

const ProductDetailFields = (props) => {
  const brands = ['Apple', 'Samsung', 'Oppo'];
  const os = ['IOS', 'Android'];

  return (
    <div style={{ marginLeft: "20px" }}>
      <TextField
        select
        margin="dense"
        name="brand"
        label="Brand"
        fullWidth
        variant="standard"
        value={props.formik.values.brand}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.brand && Boolean(props.formik.errors.brand)}
        helperText={props.formik.touched.brand && props.formik.errors.brand}
      >
        {brands.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        margin="dense"
        name="operatingSystem"
        label="Operating System"
        fullWidth
        variant="standard"
        value={props.formik.values.operatingSystem}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.operatingSystem && Boolean(props.formik.errors.operatingSystem)}
        helperText={props.formik.touched.operatingSystem && props.formik.errors.operatingSystem}
      >
        {os.map((os) => (
          <MenuItem key={os} value={os}>
            {os}
          </MenuItem>
        ))}
      </TextField>
      
      <TextField
        margin="dense"
        name="camera"
        label="Camera"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.camera}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.camera && Boolean(props.formik.errors.camera)}
        helperText={props.formik.touched.camera && props.formik.errors.camera}
      />
      
      <TextField
        margin="dense"
        name="display"
        label="Display"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.display}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.display && Boolean(props.formik.errors.display)}
        helperText={props.formik.touched.display && props.formik.errors.display}
      />
      
      <TextField
        margin="dense"
        name="memory"
        label="Memory"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.memory}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.memory && Boolean(props.formik.errors.memory)}
        helperText={props.formik.touched.memory && props.formik.errors.memory}
      />
      
      <TextField
        margin="dense"
        name="color"
        label="Color"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.color}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.color && Boolean(props.formik.errors.color)}
        helperText={props.formik.touched.color && props.formik.errors.color}
      />
    </div>
  );
};

export default ProductDetailFields;
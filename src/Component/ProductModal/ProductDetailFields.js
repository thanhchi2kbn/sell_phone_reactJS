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
  console.log("AAAA", props.formik);
  const brands = ['Apple', 'Samsung', 'Oppo'];
  const os = ['iOS', 'Android'];

  return (
    <div style={{ marginLeft: "20px" }}>
      <TextField
        select
        margin="dense"
        name="details.brand"
        label="Brand"
        fullWidth
        variant="standard"
        value={props.formik.values.details.brand }
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
        name="details.operatingSystem"
        label="Operating System"
        fullWidth
        variant="standard"
        value={props.formik.values.details.operatingSystem}
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
        name="details.camera"
        label="Camera"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.details.camera}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.camera && Boolean(props.formik.errors.camera)}
        helperText={props.formik.touched.camera && props.formik.errors.camera}
      />
      
      <TextField
        margin="dense"
        name="details.display"
        label="Display"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.details.display}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.display && Boolean(props.formik.errors.display)}
        helperText={props.formik.touched.display && props.formik.errors.display}
      />
      
      <TextField
        margin="dense"
        name="details.memory"
        label="Memory"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.details.memory}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.memory && Boolean(props.formik.errors.memory)}
        helperText={props.formik.touched.memory && props.formik.errors.memory}
      />
      
      <TextField
        margin="dense"
        name="details.color"
        label="Color"
        type="text"
        fullWidth
        variant="standard"
        value={props.formik.values.details.color}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        error={props.formik.touched.color && Boolean(props.formik.errors.color)}
        helperText={props.formik.touched.color && props.formik.errors.color}
      />
    </div>
  );
};

export default ProductDetailFields;

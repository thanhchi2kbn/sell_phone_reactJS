import { unstable_HistoryRouter } from "react-router-dom"
import axiosClient from "../../Apis/Api"

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

export function loginAction(email, password) {
    return async (dispatch) => {
        const response = await axiosClient.get("/users", {
            params: {
              email: email,
              password: password,
            },
          });
          if (response.data.length) {
            
            dispatch(showNotification({
              content: 'Đăng nhập thành công',
              typeToast: 'success',
            }));
            
            localStorage.setItem("token", "token123");
            window.location.replace("admin/product")
            // navigate("/admin/product");
          } else {
            dispatch(showNotification({
              content: 'Đăng nhập thất bại',
              typeToast: 'error',
            }));
          }
      
    }
  }
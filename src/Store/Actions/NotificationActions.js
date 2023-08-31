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

  export function addCard(product) {
    return (dispatch) => {
        if (product) {
            const productId = product.id; // Giả sử ID của sản phẩm nằm trong thuộc tính "id"
            const productImg = product.image;
            const productPrice = product.price;
            const productName = product.name;
            const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

            
            
            if (!currentCart.some(obj => obj.productId === productId)) {
                currentCart.push({
                  productId,
                  productImg,
                  productPrice,
                  productName
                });
                localStorage.setItem('cart', JSON.stringify(currentCart));

                dispatch(showNotification({
                    content: 'Sản phẩm đã được thêm vào giỏ hàng.',
                    typeToast: 'success',
                }));
            } else {
                dispatch(showNotification({
                    content: 'Sản phẩm đã có trong giỏ hàng.',
                    typeToast: 'error',
                }));
            }
        }
    }
}

  
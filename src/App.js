import './App.css';
import AdminLayout from './Layout/AdminLayout';
import ToastMessage from './Component/ToastMessage';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';

function App() {
 

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastMessage/>; 
        {/* <AdminLayout>
        </AdminLayout> */}
    </div>
  );
}

export default App;

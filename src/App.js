import './App.css';
import AdminLayout from './Layout/AdminLayout';
import ToastMessage from './Component/ToastMessage';

function App() {
 

  return (
    <div className="App">
      <ToastMessage/>; 
        <AdminLayout>
        </AdminLayout>
    </div>
  );
}

export default App;

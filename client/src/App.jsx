import Home from './pages/home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './assets/components/header/Header.jsx'
import Orders from './pages/orders/Orders.jsx'
import Admin from './pages/admin/Admin.jsx'
import Porders from './pages/admin/Porders.jsx'
import Addmenu from './pages/admin/Addmenu.jsx'
import './App.css'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Orders' element={<Orders/>}/>
   
      <Route path='/Admin' element={<Admin/>}/>
        <Route path='/Porders' element={<Porders/>}/>
        <Route path='/Addmenu' element={<Addmenu/>}/>
       
           {/* <Route index element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
           <Route path="orders" element={<ManageOrders />} /> */}
       
      </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App

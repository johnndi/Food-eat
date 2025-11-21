import Home from './pages/Home/Home.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './assets/components/header/Header.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Viewmenu from './pages/Admin/Viewmenu.jsx'
import Admin from './pages/Admin/admin.jsx'
import Porders from './pages/Admin/Porders.jsx'
import Addmenu from './pages/Admin/Addmenu.jsx'
import Addadmin from './pages/Admin/Addadmin.jsx'
import Protected from './Protected.jsx'
import Footer from './assets/components/footer.jsx'
import './App.css'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
     
   
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/Orders' element={<Orders/>}/>


        <Route  element={<Protected/>}>
        <Route path='/Admin/*' element={<Admin/>}/>
        <Route path= "/Admin/Porders" element={<Porders/>}/>
        <Route path="/Admin/Addmenu" element={<Addmenu/>}/>
        <Route path="/Admin/Addadmin" element={<Addadmin/>}/>
        <Route path="/Admin/viewmenu" element={<Viewmenu/>}/>
        </Route>
       
        
       
        
          
       
      </Routes>
      <Footer/>
     </BrowserRouter>
        
    </>
  )
}

export default App

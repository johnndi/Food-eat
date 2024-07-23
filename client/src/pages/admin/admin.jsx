import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Porders from './Porders';
import Addadmin from './Addadmin';
import Addmenu from './Addmenu';

function Admin() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
      <Route path="Porders" element={<Porders />}/>
      <Route path="addadmin" element={<Addadmin />}/>
      <Route path="addmenu" element={<Addmenu />}/>
      </Route>
    </Routes>
  );
}

export default Admin;

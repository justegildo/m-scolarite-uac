import './App.css';
import AdminRoute from './pages/Admin/AdminRoute';
import { Routes, Route } from 'react-router-dom'
import AuthRoute from './pages/Auth/AuthRoute';
import AuthGuard from './_helpers/AuthGuard';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path='/*' element={
          <AuthGuard>
            <AdminRoute />
          </AuthGuard>
        } />

        <Route path='/auth/*' element={<AuthRoute />} />

      </Routes>

    </div>
  );
}

{/* <AuthGuard>
            <AdminRoute />
          </AuthGuard> */}

export default App;

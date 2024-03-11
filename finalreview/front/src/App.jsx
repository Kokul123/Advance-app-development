

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './components/user/signin';
import SignUp from './components/user/signup';
import AdminDashboard from './components/admin/adminDashboard';
import UserDashboard from './components/user/userDashboard';
import Bookings from './components/user/Bookings';
import Packages from './components/user/packages';
import BoatHousePage from './components/user/BoatHousePage';
import Payment from './components/user/payment';
import Profile from './components/user/ProfileR';
import UserGroup from './components/admin/usergroup';
import Formdetail from './components/user/regform';
import UserProfileCard from './components/user/Profile';
import Final from './components/user/final';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <SignIn/>
    },
    {
      path:'/reg',
      element:<SignUp/>
    },
    {
      path:'/admin',
      element:<AdminDashboard/>
    },
    ,{
      path:'/user',
      element:<UserDashboard/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/final',
      element:<Final/>
    },
    {
      path:'/bookings',
      element:<Bookings/>
    },
    {
      path:'/package',
      element:<Packages/>
    },
    {
      path:'/boat',
      element:<BoatHousePage/>
    },
    {
      path:'/pay',
      element:<Payment/>
    },
    {
      path:'/usergroup',
      element:<UserGroup/>
    },
    {
      path:'/book',
      element:<Formdetail/>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App

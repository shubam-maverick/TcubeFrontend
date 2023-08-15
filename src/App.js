import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import { ChatPage } from './pages/chat';

const router =createBrowserRouter([
  {path:'/', element : <SignUp /> },
  {path:'/login', element: <Login/>},
  {path:'/home', element:<ChatPage/>}
]);

function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;

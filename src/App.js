import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/index.tsx';
import SignUp from './pages/signup/index.tsx';
import { ChatPage } from './pages/chat/index.tsx';

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

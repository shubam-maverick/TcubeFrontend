import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/index.tsx';
import SingUp from './pages/signup/index.tsx';
import { ChatPage } from './pages/chat/index.tsx';

const router =createBrowserRouter([
  {path:'/', element : <SingUp /> },
  {path:'/login', element: <Login/>},
  {path:'/home', element:<ChatPage/>}
]);

function App() {
  return (
    // <div className="App">
    //    <Login/>
    // </div>
    <RouterProvider router = {router}/>
  );
}

export default App;

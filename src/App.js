import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile/index.tsx'
import Avatar from './components/avatar/index.tsx'
import InputPassword from './components/input-password/index.tsx'
import InputEmail from './components/input-email/index.tsx'
import Button from './components/button/index.tsx'
import ConnectionView from './components/connection-view/index.tsx'

function App() {
  return (
    <div className="App">
       <Profile/>
       {/* <ConnectionView/> */}
    </div>
  );
}

export default App;

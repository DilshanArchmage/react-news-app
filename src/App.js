
import './App.css';
import { useSelector } from "react-redux";
import Blogs from './Component/Blogs';
import Homepage from './Component/homepage';
import Navbar from './Component/Navbar';
import { selectSignedIn } from "./features/userSlice";

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="App">
      <Navbar/>
       <Homepage/>
       {isSignedIn && <Blogs />}
     
    </div>
  );
}

export default App;

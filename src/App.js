
import ApiCall from './ApiCall';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ApiCall/>
      <ToastContainer />
    </div>
  );
}

export default App;

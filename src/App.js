import './App.css';
import './App.css'
import NavBar from './Components/NavBar';
import ApiCall from './Components/ApiCall';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Provider } from 'react-redux';
import store from './Redux/store';
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <Provider store={store}>
          <NavBar />
          <ApiCall />
          <Footer/>
      </Provider>
    </>
  )
}

export default App;

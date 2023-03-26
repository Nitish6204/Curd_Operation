import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Login from './componants/Login';
import Dashboard from './componants/Dashboard';
import AddUser from './componants/AddUser';
import UserList from './componants/UserList';
import Modal from './componants/Modal';
import EditUser from './componants/EditUser';
import Spinner from './componants/Spinner';
import Image from './componants/Image';


function App(props) {

  // const dispatch = useDispatch();
  // const hideModal=(e)=>{
  //   e.preventDefault();
  //   dispatch({type:'HIDE_MODAL'});
  // }
  return (

    <div className="App">
      <div>

      </div>
      <div>
        <Navbar />
        <Image/>
      </div>

      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path='/edituser:id' element={<EditUser />} /> */}
          <Route path='/edituser/:id' element={<EditUser />} />
        </Routes>
        <Modal isModalVisible={props.isVisible} Message={props.Message} />
        <div className='align-left'>
        <Spinner isSpinnerVisible={props.SpinnerVisible} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isVisible: state?.alertreducers.isModalVisible,
  Message: state?.alertreducers.Message,
  SpinnerVisible: state?.loaderreducers.isSpinnerVisible,

});
export default connect(mapStateToProps, null)(App)
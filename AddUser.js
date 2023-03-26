import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    age: ""
  });

  const validation = () => {

    if (typeof formData.name === 'string' && formData.name?.trim()?.length === 0) {
      dispatch({ type: "SHOW_MODAL", Message: "name is requried" });
    }
    else if (typeof formData.salary === 'string' && formData.salary?.trim()?.length === 0) {
      dispatch({ type: "SHOW_MODAL", Message: "salary is requried" });
    }
    else if (typeof formData.age === 'string' && formData.age?.trim()?.length === 0) {
      dispatch({ type: "SHOW_MODAL", Message: "age is requried" });

    }
  }

  const handleFormSubmit = async (e) => {
    console.log(formData)

    e.preventDefault();
    if (formData.name?.trim()?.length === 0 || formData.salary?.trim()?.length === 0 || formData.age?.trim()?.length === 0) {
      validation()
    }
    else {
      dispatch({ type: "SHOW_LOADER" });
      let response = await axios.post('http://localhost:3004/posts', formData);
      if (response) {
        dispatch({ type: "SHOW_MODAL", Message: "Reacord Added Sucessfully" });
        alert("data saved");
        dispatch({ type: "HIDE_LOADER" });
        navigate('/dashboard');

      }
      else {
        dispatch({ type: "SHOW_MODAL", Message: "Something Went Wrong" });
        //alert("something went wrong");
      }
      console.log(response)
      setFormData({
        name: "",
        salary: "",
        age: ""
      });
    }

    // let response = await axios.post('http://localhost:3004/posts', formData);
    // if (response) {
    //   dispatch({ type: "SHOW_MODAL", Message: "Reacord Added Sucessfully"});
    //   alert("data saved");
    //   navigate('/dashboard');

    // } 
    // else {
    //   dispatch({ type: "SHOW_MODAL", Message: "Something Went Wrong"});
    //   //alert("something went wrong");
    // }
    // console.log(response)
    // setFormData({
    //   name: "",
    //   salary: "",
    //   age: ""
    // });
  };

  //   console.log({ formData })
  // let response = await axios.post('https://mocki.io/v1/7dcdb371-ddef-4824-baef-a788c64d9cc1', formData);
  // if (response) {
  //   alert("data saved");
  // } else {
  //   alert("something went wrong");
  // }
  // console.log({ response })

  // setFormData({
  //   name: "",
  //   salary: "",
  //   age: ""
  // });
  return (
    <div>


      <div>
        <h1>Add Employ Detail</h1>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label>Name : </label>
          <input type="text" className="form-control" name="name" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })
            } />
        </div>
        <div className="col">
          <label>Salary : </label>
          <input type="text" className="form-control" name="salary" value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
        </div>
        <div className="col">
          <label>Age : </label>
          <input type="text" className="form-control" name="age" value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
        </div>
      </div>
      <br />

      <button className='btn btn-primary' onClick={handleFormSubmit}>ADD RECORD</button>
    </div>
  );
}

export default AddUser;
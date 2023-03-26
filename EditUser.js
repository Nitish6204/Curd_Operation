import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

function EditUser() {

  let navigate = useNavigate();
  //  const location = useLocation();
   // console.log(location)
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [loading, setLoading] = useState(true)
  // const [name, setName] = useState();
  // const [Id, setId] = useState();
  // const [age, setAge] = useState();
  // const [salary, setSalary] = useState();

  const [formData, setFormData] = useState({
    Id: 0,
    name: "",
    salary: "",
    age: ""
  })

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

  useEffect(() => {
    dispatch({ type: "SHOW_LOADER" });
    fetch("http://localhost:3004/posts/" + id).then((res) => {
      return res.json();
    })
      .then((resp) => {
        console.log(resp)

        setFormData({
          Id: resp.id,
          name: resp.name,
          salary: resp.age,
          age: resp.salary
        })
        // setId(resp.Id);
        // setName(resp.name);
        // setAge(resp.age);
        // setSalary(resp.salary)
        dispatch({ type:"HIDE_LOADER"});
      })

      .catch((err) => {
        console.log(err)
      });
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    if (formData.name?.trim()?.length === 0 || formData.salary?.trim()?.length === 0 || formData.age?.trim()?.length === 0) {
      validation()
    }
    else {
      // const formData = { name, age, salary }
      // console.log(formData)

      dispatch({ type: "SHOW_LOADER" });
      let response = await axios.put('http://localhost:3004/posts/' + formData.Id, formData);
      // dispatch({ type: "SHOW_MODAL", Message: "Record updated" });
      if (response) {
        alert("data saved");
        dispatch({ type: "HIDE_LOADER" });
        navigate('/dashboard');
      }
      else {
        dispatch({ type: "SHOW_MODAL", Message: "Something Went Wrong!!" });
        alert("something went wrong");
      }
      console.log(response)
    }
  };
  // if (loading) {
  //   return <div><ReactBootstrap.Spinner animation="border" /></div>;
  // }

  return (
    <>
      <Modal />
      <div>
        <div>
          <h1>Edit Employ Detail</h1>
        </div>
        <br />

{/* <div>user id:{location.state.id}</div> */}
        <div className="row">
          <div className="col">
            <label>ID : </label>
            <input type="text" className="form-control" name="id" readOnly={true} value={formData.Id} />
          </div>

          <div className="col">
            <label>Name : </label>
            <input type="text" className="form-control" name="name" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value})} />
          </div>
          <div className="col">
            <label>Salary : </label>
            <input type="text" className="form-control" name="salary" value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value})} />
          </div>
          <div className="col">
            <label>Age : </label>
            <input type="text" className="form-control" name="age" value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value})} />
          </div>
        </div>
        <br />
        <button className='btn btn-primary' onClick={handleFormSubmit}>Update RECORD</button>
      </div>
    </>
  )
}

export default EditUser
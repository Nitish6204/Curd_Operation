import React, { useState, useEffect } from 'react'
import NavBar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function Dashboard() {
  // const [employee_name, setemployee_name] = useState()
  // const [employee_salary, setemployee_salary] = useState()
  // const [employee_age, setemployee_age] = useState()
  // const [id, setid] = useState(null)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true)
  const [data, setData] = useState([{}])

  const fetchData = async () => {
    dispatch({ type: "SHOW_LOADER" });
    axios.get("http://localhost:3004/posts").then((res) => {

      //setLoading(false);
      console.log(res);

      setData(res.data);
      console.log(res.data)
      dispatch({ type: "HIDE_LOADER"});
    })

      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, [])

  //  function handleDelete(id){
  //   fetch(`https://dummy.restapiexample.com/public/api/v1/delete/${id}`, {method:'DELETE'}).then((result)=>{
  //     result.json().then((response)=>{
  //       console.log(response)
  //       fetchData();

  //     })
  //   })
  //  };

  //  function hadleUpdate(id){
  //   // console.log(data[id-1])
  //   // let a=data[id-1]
  //   // setemployee_name(a.employee_name)
  //   //    setemployee_salary(a.employee_salary)
  //   //    setemployee_age(a.employee_age)
  //   //    setid(a.id)
  //  };

  //  function updateRecord(){
  //   console.log(employee_name,employee_salary,employee_age,id)
  //   //fetch(`https://dummy.restapiexample.com/public/api/v1/update/${id}`), {method:'PUT'}
  //   let b={employee_name,employee_salary,employee_age,id}
  //   fetch(`https://dummy.restapiexample.com/public/api/v1/update/${id}`, {method:'PUT',headers:{'Accept':'application/json','Content-Type':'application/json'},
  //   body:JSON.stringify(b)  
  //   }).then((result)=>{
  //     result.json().then((response)=>{
  //       console.log(response)
  //       fetchData();
  //     })
  //   })
  //  }

    // const hadleEdit = (id) =>{
    //   navigate("/edituser", {
    //     state: {
    //       id: id,
          
    //     }
    //   });
    // }


  const hadleEdit = (id) => {
    navigate("/edituser/" + id);
  }


  const handleDelete = (id) => {

    if (window.confirm('Do you want to delete record?')) {
      fetch("http://localhost:3004/posts/" + id, {
        method: "DELETE"
      })
        .then((res) => {
          dispatch({ type: "SHOW_MODAL", Message: "Deleted Successfully" });
          //alert('Recod delete successfully!!')
          fetchData();
        })
        .then((err) => {
          console.log('Something went wrong')
        })
    }
  }
  // if (loading) {
  //   return <div><ReactBootstrap.Spinner animation="border" /></div>;
  // }

  return (
    <>
      <div>

      </div>

      <br />

      {/* {loading ? (data) :<ReactBootstrap.Spinner animation="border" />} */}
      <br />
      <br></br>
      <h1>Employee List</h1>
      <br />

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Age</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>

            {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>asd</td>
<td>
      <button className='btn btn-info m-2'> EDIT </button>
          <button className='btn btn-danger m-2' onClick={handleDelete}> DELETE </button>
          </td>
    </tr> */}
            {/* {
      data &&data.map((item,index)=>(
        <tr key={index}>

        <td>{item.id}</td>
        <td>{item.employee_name}</td>
        <td>{item.employee_salary}</td>
        <td>{item.employee_age}</td>
       

        <td>
          <button className='btn btn-info m-2' onClick={()=>hadleUpdate(item.id)}> EDIT </button>
          <button className='btn btn-danger m-2'onClick={()=>handleDelete(item.id)}> DELETE </button>
        </td>
      </tr>
      ))} */}


            {data && data.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.age}</td>

                <td>
                  <a className='btn btn-info m-2' onClick={() => hadleEdit(item.id)}> EDIT </a>
                  <a className='btn btn-danger m-2' onClick={() => handleDelete(item.id)}> DELETE </a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>



      {/* {loading ? (data) :<ReactBootstrap.Spinner animation="border" />} */}

      {/* <input type="text" value={employee_name} onChange={(e)=>{setemployee_name(e.target.value)}}/>
    <input type="text" value={employee_salary} onChange={(e)=>{setemployee_salary(e.target.value)}}/>
    <input type="text" value={employee_age} onChange={(e)=>{setemployee_age(e.target.value)}}/>

    <button onClick={()=>updateRecord()}>Update Record</button> */}
    </>
  )
}

export default Dashboard
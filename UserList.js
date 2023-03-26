import React, {useState, useEffect} from 'react'
import NavBar from './Navbar'


function UserList() {

    const [data, setData] = useState(null)
    const fetchData = async () => {
        // await axios.get("https://dummy.restapiexample.com/api/v1/employees").then((res)=>setData(res.data));
        // console.log(data)
           
        


        const response = await fetch("https://dummy.restapiexample.com/api/v1/employees")
        const data = await response.json()
        setData(data)
     console.log(data)
    }
    useEffect(() => {
        
        fetchData();
      }, [])

  return (
    <>
    <div>
      
    </div>
    <div>
    <br/>
        <br/>
        <br></br>      
        <h1>Employee List</h1>
        <br/>
    </div>
    <div>
     {data && <pre>{JSON.stringify(data)} </pre> } 
    </div>

    <div>
    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Age</th>
      <th scope='col'>Image</th>
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
      data.map((list)=>(
        <tr>
        <th scope="row">{list.id}</th>
        <td>{list.employee_name}</td>
        <td>{list.employee_salary}</td>
        <td>{list.employee_age}</td>
        <td>{list.profile_image}</td>

        <td>
          <button className='btn btn-info m-2'data-bs-toggle="modal" data-bs-target="#exampleModal"> EDIT </button>
          <button className='btn btn-danger m-2' > DELETE </button>
        </td>
      </tr>
      ))} */}

{/* {data.map((item, index) => (
          <tr key={index}>
            <td>{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            
              
            <td>{item.employee_age}</td>
            <td>{item.profile_image}</td>
          </tr>
        ))} */}
  </tbody>
</table>
    </div>
    </>
  )
}

export default UserList

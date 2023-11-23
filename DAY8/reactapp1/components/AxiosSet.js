import React,{useState,useEffect} from 'react'
import axios from 'axios'
function AxiosSet () {
    const[employee,setEmployee]=useState([])
    useEffect(() => {
        axios
        .get('http://localhost:3001/users')
        .then((res) => {
            setEmployee(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
        
    },[]);

  return (
    <div>AxiosGet
<ul>
    {employee.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
    ))}
</ul>
    </div>
  )
}

export default AxiosSet
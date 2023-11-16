import { useState } from "react";

function Stateprop() {
    const [name,setName]=useState('Anu');
    const [num,setNum]=useState(0);
    const [student,setStudent]=useState({name:'Mike',age:17});

    const nameHandler = () => {
        setName("Mike");
    };
    const numHandler = () => {
        let value=num;
        setNum(++value);
    };
    return (
        <div>
        <h1>State AND Props</h1>
        <hr></hr>
        <h2>Hi {name}</h2>
        <h2>Number is {num}</h2>
        <h2>Student name is {student.name} and age is {student.age}</h2>
        <button onClick={nameHandler}>Change Name </button>
        <button onClick={numHandler}>Increment Number</button>
        
        </div>
    );
}
export default Stateprop;
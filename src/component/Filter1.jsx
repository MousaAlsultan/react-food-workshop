import React ,{useState} from 'react';

function Filter1({minVal , setminVal , maxVal,setmaxVal}){
const handelminVal = (e) => {
    setminVal(e.target.value)
    
}
const handelmaxVal = (e) => {
    setmaxVal(e.target.value) 
}
    return(
    <>
    <label>
    min price
    <input type="range" min="0" max= "10"value={minVal} onChange={handelminVal}/>
    </label>
    <label>
    max price
    <input type="range" min="0" max="10"value={maxVal} onChange={handelmaxVal}/>
    </label>
    </>
    )
}

export default Filter1;


import React , {useState}from "react";



const C = ({category ,filercategory ,setfilercategory}) => {
    const handelcategory =(e)=>{
        setfilercategory(e.target.value)

    }

    return ( 
        <label>
            <input type="radio" name="x" value={category} onClick={handelcategory} checked={category===filercategory}/>
            {category}
        </label>
     );
}
 
export default C;
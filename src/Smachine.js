import React from 'react'

const Smachine=(props)=>{
    // let x="😀"
    // let y="😀"
    // let z="😀"
  
    let x=props.x; 
    let y=props.y; 
    let z=props.z; 
  
  
  
  if((x===y) && (y===z)){
    return (
      <>
      <div className="min" style={{textAlign:"center",}} >
      <div>
        <h1>{x} {y} {z}</h1>
        <h1>This is matching</h1>
      </div>
      <hr />
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className="min" style={{textAlign:"center"}} >
       <h1>{x} {y} {z}</h1>
     <h1> this is Not matching</h1>
      <hr />
      </div>
      </>
    )
    
  }
  
  }

  export default Smachine;
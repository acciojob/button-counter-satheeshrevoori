import React, { useState } from 'react'

function Buttoncounter() {
    const[count, setCount] = useState(1);
  return (
       <>
          <p>Button clicked {`${count}`} times</p>
          <button onClick={()=>setCount(count+1)}>Click Me</button>
      </>



  )
}

export default Buttoncounter
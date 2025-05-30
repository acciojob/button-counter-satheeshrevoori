
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(1);
return (
<>
<p>Button clicked {count} times</p>
<button onClick={()=>setCount(count+1)}>Click Me</button>
</>

)

}

export default App

//Child Component
function Greeting(props) {
   const style={
      color: "white",
      backgroundColor: "blue",
      padding: "10px",
      borderRadius: "8px",
      margin: "5px 0"
    }
  return (
    <>
      <p style={style}>Hello this is {props.name}</p>
    </>
  )
}

//Parent Component
function App() {
  return (
    <>
      <Greeting name="Asha" email="fjfjf" />
      <Greeting name="John" />
    </>
  )
}



// import React, { useState } from 'react';

// function Counter() {
//   // useState returns an array: [currentState, functionToUpdateState]
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Counter: {count}</h2>
//       <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px' }}>
//         Increase
//       </button>
//       <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px', marginLeft: '10px' }}>
//         Decrease
//       </button>
//     </div>
//   );
// }


export default App;
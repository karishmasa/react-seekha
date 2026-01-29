//App.jsx

import Greeting from'./Greeting'

function App(){
  return(
    <div>
    <Greeting userName="Rahul" />
    <Greeting userName="Sheetal" />
    <Greeting userName="Ria" />
    <Greeting userName="Chia" />
    <Greeting userName="Pistol" />
    <Greeting userName="RUingh" />
    </div>
  );
}
export default App;

//Greeting.jsx

const Greeting = ({userName}) => {
    return(
<h2>
      Hello, {userName}! Welcome to React. 🚀
    </h2>
    )
}
export default Greeting;
// useEffect y useState son funciones a usar de react, tenemos que llamarlas
import{ useEffect, useState } from 'react';

function App() {
//constante que se crea como un array
const [count, setCount] = useState([]);
//setCount es una funcion y count es la variable que tiene un array vacio

  useEffect(() =>{
  async function fetchData() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCount(data.results)
  }
  fetchData()
}, [])

return (
  <div>
    <h2>Rick And Morty</h2>
    {
      count.map(counts => {
        return (<div>
          <h2>{counts.name}</h2>
          <img src={counts.image} />
        </div>)
      })
    }
  </div>
)

}
//count.map 



export default App

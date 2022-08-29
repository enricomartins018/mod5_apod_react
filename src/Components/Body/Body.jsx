import React, { useEffect, useState } from 'react'

const Body = () => {
  const [dados, setDados] = useState([])
  async function APINasa(){
   await fetch('https://api.nasa.gov/planetary/apod?api_key=brh2yVXhuHZSXnpDXg38AcoI60lyYzx5i4Hfm70v')
    .then(Response => Response.json() )
    .then(data => setDados(data))
  }
  useEffect(()=>{
    APINasa()
    console.log(dados);
  },[])
  return (
    <body>
        <section>
            
            <button>Navegar</button>
        </section>
    </body>
  )
}

export default Body
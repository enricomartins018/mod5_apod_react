import React, { useEffect, useState } from 'react'
import S from './Body.module.css'
const Body = () => {
  const [dados, setDados] = useState([])
  const [data, setData] = useState('')
  const [send, setSend] = useState(false)
  async function APINasa(data, setDados) {
    await fetch(`https://api.nasa.gov/planetary/apod?api_key=brh2yVXhuHZSXnpDXg38AcoI60lyYzx5i4Hfm70v&date=${data}`)
      .then(Response => Response.json())
      .then(value => setDados(value))
  }
  useEffect(() => {
    if (data != '') {
      APINasa(data, setDados)
      console.log(dados);
    }
  }, [send])
  return (
    <body className={S.body}>
      <section className={S.section}>
        <label htmlFor='dataDesajada' className="selecioneData"><h2>Selecione a data da sua viagem:</h2></label>
        <input type="date" onChange={(e) => setData(e.target.value)} id="dataDesejada" min="1995-06-16" />
        <button className={S.btnPattern} onClick={() => { send == true ? setSend(false) : setSend(true) }}>Enviar data</button>
        <div>
          {dados.title}
        </div>
        <div>
          {dados.media_type == 'image' ? <img src={dados.hdurl} className={S.midia} /> : <iframe src={dados.url} className={S.midia} />}
        </div>
        <div>
          {dados.explanation}
        </div>
      </section>
    </body>
  )
}

export default Body
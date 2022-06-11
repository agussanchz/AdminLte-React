import React from 'react';
import { clients } from '../../Data/Data';
import ClientList from '../ClientList/ClientList';

export default function Content() {

  const [listClient, setListClient] = React.useState([])
  
  const [loading, setLoading] = React.useState(true)
  
  const getClient = new Promise ((resolve,reject) => {
    let condition = true
    setTimeout(() =>{
      if(condition){
        setLoading(false)
        resolve(clients)
      }
      else{
        reject("error")
      }
    },2000)
  })
 
  React.useEffect(() => {  
    getClient
    .then((response) => setListClient(response))
    .catch((error) => console.log("Error:", error))
  },[])

  console.log(listClient)

  return (
    <div>
      <h1>AdminLte with React</h1>
      
      {loading ? (

        <p>Cargando..</p>
      )
      : (

        <ClientList client={listClient}/>
      )}
    </div>
  )
}

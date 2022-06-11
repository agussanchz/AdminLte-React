import React from 'react'
import Client from '../Client/Client';

export default function ClientList({client}) {
  return (
    <div>

        {client.map((cliente) => <Client cliente={cliente} key={cliente.id}/>)}
        
    </div>
  )
}

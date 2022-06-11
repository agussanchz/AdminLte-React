import React from 'react'
import Client from '../Client/Client';

export default function ClientList({client}) {
  return (
    <div>
        <div className="content-wrapper">
            <div className="card-body table-responsive p-0">
                <table className="table table-striped table-valign-middle">
                    <thead>
                          <tr>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Telefono</th>
                              <th>Email</th>
                          </tr>
                    </thead>       
                </table>
            </div>
        </div>

      {client.map((cliente) => <Client cliente={cliente} key={cliente.id}/>)} 
        
    </div>
  )
}

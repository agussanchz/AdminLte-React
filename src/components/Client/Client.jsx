import React from 'react'

export default function Client({cliente}) {


  return (
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
                    <tbody>
                        <tr>
                            <td>
                            {cliente.name}
                            </td>
                            <td>
                            {cliente.apellido}
                            </td>
                            <td>
                            {cliente.telefono}
                            </td>
                            <td>
                            {cliente.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

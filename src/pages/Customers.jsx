import { Outlet, Link, useLoaderData } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";

import '../assets/css/Products.module.css'


export default function Customers() {
  const customers = useLoaderData();

  console.log(customers);
  return (
    <div>
      <Outlet></Outlet>
      <div className="container">
        <br></br>
        <br></br>
        <h1>Clientes</h1>
        <br></br>
        
        <Link className="nav-link" to="/customers/create-customer">
          <Button variant="danger"><AiOutlineFileAdd />Nuevo cliente</Button>
        </Link>        

        <br></br>
        <br></br>
        <Table responsive className="table table-bordered">
          <thead className="table-info">
            <tr>
              <th>Nombre</th>              
              <th>Correo Electronico</th>
              <th>Celular</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((item)=>{
                let editarCliente = 'editar/'+item.id;
                let eliminarCliente = 'editar/'+item.id;
                return (
                  <tr key={item.id}>
                    <td>{item.nom}</td>
                    <td>{item.correo}</td>
                    <td>{item.celular}</td>
                    <td>{item.direccion}</td>
                    <td>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={item.id}><FaEye /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={editarCliente}><FaEdit /></Link>
                      <Link style={{marginRight: "10px", marginLeft: "10px"}} to={eliminarCliente}><FaTrash /></Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>

        </Table>
      </div>
    </div>
  )
}

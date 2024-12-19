import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';
import Modal2 from './Modal'

export default function FormNewCustomers() {

  return (
    <Modal2>
      <MainForm method="post">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del cliente:</Form.Label>
          <Form.Control name="nom" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control name="correo" placeholder=""/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Número celular:</Form.Label>
          <Form.Control name="celular" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Dirección:</Form.Label>
          <Form.Control name="direccion" placeholder="" />
        </Form.Group>
        <br />
        <div style={{  display: "flex", justifyContent: "flex-end",  gap: "1rem"}}>
          <button className="btn btn-light">
            <Link className="nav-link" to='..'>
              Cancel
            </Link>
          </button>
          <button className="btn btn-primary">Submit</button>
        </div>
        <br />
      </MainForm>
    </Modal2>
  )
}
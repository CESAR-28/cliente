import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal'
import classes from '../assets/css/ProductDetails.module.css'

export default function CustomerDetails() {
  const customer = useLoaderData();
  
  if (!customer) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>      
        <p className={classes.author}>ID: {customer.id}</p>
        <p className={classes.text}>Nombre: {customer.nom}</p>
        <p className={classes.text}>Email: {customer.correo}</p>
        <p className={classes.text}>Celular: {customer.celular}</p>
        <p className={classes.text}>Dirección: {customer.direccion}</p>
      </main>
    </Modal>
  );
  
}

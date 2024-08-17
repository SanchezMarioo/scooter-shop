import React from 'react';
import ScooterCard from '../component/ScooterCard';
async function getProductos() {
    const response = await fetch('http://localhost:3002/products');
    const productos = await response.json();
    if (!response.ok) {
      throw new Error('No se pudo obtener los productos');
    }
    return productos;
}
export default async function Scooter() {
  const data = await getProductos();
  
    return (
      <div className="contPrincipal container mb-5">
      <h2>Scooters ({data.length})</h2>
      <div className="grid">
      <div className="row mt-3">
          <div className="col-8">
          {/*DESTACADOS TARJETAS*/}
          <div className="d-flex p-2 flex-wrap justify-content-between">
              {data.map((producto) => (
                <ScooterCard key={producto.id} modelo={producto.modelo} img={producto.img} txt={producto.txt} />
              ))}
          </div>
          </div>
          <div className="col-4">
          {/*DESTACADOS APILADOS*/}
          <div className="card">
              <div className="card-header">
              <h4>Top</h4>
              </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  Xiaomi Mi Electric Scooter Pro{" "}
                  <span className="badge text-bg-dark float-end">546 €</span>
              </li>
              <li className="list-group-item">
                  Bongo Serie S{" "}
                  <span className="badge text-bg-dark float-end">375 €</span>
              </li>
              <li className="list-group-item">
                  Xiaomi Mi Electric Scooter{" "}
                  <span className="badge text-bg-dark float-end">250 €</span>
              </li>
              </ul>
          </div>
          </div>
      </div>
      </div>
  </div>

    );
  }
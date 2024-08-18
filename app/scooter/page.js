import React from 'react';
import ScooterCard from '../component/ScooterCard';
import ScooterTop from '../component/ScooterTop';
import SearchNav from '../component/SearchNav';
async function getProductos(precio) {
  let response;
  if(precio) response = await fetch(process.env.DB_HOST+ 'products?precio_lte='+precio)
    else response = await fetch(process.env.DB_HOST + 'products')
    const productos = await response.json();
    if (!response.ok) {
      throw new Error('No se pudo obtener los productos');
    }
    return productos;
}
async function topProductos(){
  const responseTop = await fetch(process.env.DB_HOST + 'products?destacado=1', { next: { revalidate: 3600 }});
  const productosTop = await responseTop.json();
  if (!responseTop.ok) {
    throw new Error('No se pudo obtener los productos');
  }
  return productosTop;
}
export default async function Scooter({searchParams}) {
  const data = await getProductos(searchParams.precio);
  const dataTop = await topProductos();
  
    return (
      <>
      <SearchNav />
      <div className="contPrincipal container mb-5">
      <h2>Scooters ({data.length})</h2>
      <div className="grid">
      <div className="row mt-3">
          <div className="col-8">
          {/*DESTACADOS TARJETAS*/}
          <div className="d-flex p-2 flex-wrap justify-content-between">
              {data.map((producto) => (
                <ScooterCard key={producto.id} modelo={producto.modelo} img={producto.img} txt={producto.txt} id={producto.id}/>

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
                {dataTop.map((producto) => (
                  <ScooterTop key={producto.id} modelo={producto.modelo} precio={producto.precio} />
                ))}
              </ul>
          </div>
          </div>
      </div>
      </div>
  </div>
  </>
    );
  }
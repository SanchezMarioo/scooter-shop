import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarrouselClient from "./component/CarrouselClient";

export default function Home() {
  return (
    <main className="container-fluid p-5">
      <CarrouselClient />
    </main>
  );
}

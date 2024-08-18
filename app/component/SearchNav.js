'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function SearchNav() {
    const router = useRouter();
    const [text, setText] = useState("");
    useEffect(() => {
        router.push("/scooter?precio=" + text);
    }, [text,router]);

    return (
        <div className="w-100">
            {/* BARRA FILTRO */}
            <ul
                className="nav justify-content-end contPrincipal pt-3 pb-1 pe-2 text-bg-dark"
                style={{ marginTop: 64 }}
            >
                <li className="nav-item">
                    <div className="row text-bg-dark">
                        <label htmlFor="inputPrecio" className="col col-form-label text-end">
                            Precio máximo
                        </label>
                        <div className="col">
                            <input
                                className="form-control"
                                id="inputPrecio"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
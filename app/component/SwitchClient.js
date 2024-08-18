'use client';
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function SwitchClient() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme("light");
    }, [setTheme]);

    const cambiarTema = () => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
    };

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={cambiarTema}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Tema oscuro
            </label>
        </div>
    );
}
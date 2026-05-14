import { NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";

const navLinks = [
    { to: "/", label: "Accueil", exact: true },
    { to: "/le-sita", label: "Le SITA" },
    { to: "/editions", label: "Éditions" },
    { to: "/exposants", label: "Exposants" },
    { to: "/formations", label: "Formations" },
    { to: "/presse", label: "Presse & Blog" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass = isHome
        ? scrolled
            ? "navbar fixed top-0 z-50 bg-neutral text-neutral-content shadow-lg transition-all duration-300"
            : "navbar fixed top-0 z-50 bg-transparent text-white transition-all duration-300"
        : "navbar sticky top-0 z-50 bg-neutral text-neutral-content shadow-lg";

    return (
        <nav className={navClass} aria-label="Navigation principale">
            {/* Barre panafricaine tout en haut */}
            <div className="pan-african-bar absolute top-0 left-0 right-0" />

            <div className="container mx-auto px-4 pt-1 w-full flex items-center justify-between">
                {/* Logo */}
                <div className="navbar-start">
                    <NavLink to="/" className="flex items-center gap-3 group" aria-label="SITA - Accueil">
                        <img
                            src="/logo-sita.JPG"
                            alt="Logo officiel SITA"
                            className="w-12 h-12 rounded-full border-2 border-secondary bg-white object-contain group-hover:scale-105 transition-transform shadow"
                            style={{ padding: "2px" }}
                        />
                        <div className="hidden sm:block">
                            <div className="font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Salon International
                            </div>
                            <div className="text-xs opacity-80 leading-tight">du Textile Africain</div>
                        </div>
                    </NavLink>
                </div>

                {/* Menu desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 p-0">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    end={link.exact}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                            ? "bg-primary text-primary-content"
                                            : "hover:bg-white/10 hover:text-secondary"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Actions + menu mobile */}
                <div className="navbar-end gap-2">
                    <NavLink
                        to="/exposants"
                        className="btn btn-primary btn-sm hidden md:flex"
                    >
                        S'inscrire
                    </NavLink>

                    {/* Sélecteur de langue */}
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost btn-sm gap-1">
                            <span>🌍</span>
                            <span className="text-xs">FR</span>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 text-base-content rounded-box z-50 w-28 p-2 shadow-lg">
                            <li><button className="text-sm font-medium text-primary">Français</button></li>
                            <li><button className="text-sm">English</button></li>
                            <li><button className="text-sm">Español</button></li>
                        </ul>
                    </div>

                    {/* Hamburger mobile */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost btn-square" aria-label="Menu mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-neutral text-neutral-content rounded-box z-50 w-56 p-2 shadow-xl mt-2">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        end={link.exact}
                                        className={({ isActive }) =>
                                            isActive ? "active bg-primary text-primary-content" : ""
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                            <div className="divider my-1" />
                            <li>
                                <NavLink to="/exposants" className="btn btn-primary btn-sm justify-center">
                                    S'inscrire
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

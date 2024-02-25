import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const navList = [
    {
        href: "/",
        linkText: "Home",
    },
    {
		href:"/Certif",
		linkText: "Certifications",
	},
    {
        href: "/projects",
        linkText: "Projects",
    },
    {
        href: "/aboutus",
        linkText: "About Me",
    },
    {
        href: "/contactus",
        linkText: "Contact Me",
    },
];
export default function Navigation() {
    let history = useNavigate();
    useEffect(() => {}, [history]);
    const { t } = useTranslation();
    return (
        <nav id="navbar">
            <ul className="nav nav-tabs">
                {navList.map((navItem) => (
                    <li className="nav-item" key={navItem.href}>
                        <Link
                            to={navItem.href}
                            className={
                                window.location.pathname === navItem.href
                                    ? "nav-link active"
                                    : "nav-link text-light"
                            }
                        >
                            {t(navItem.linkText)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
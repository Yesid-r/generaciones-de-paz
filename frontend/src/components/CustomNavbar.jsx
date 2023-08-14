import React, { useContext, useState } from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { AuthContext } from '../context/AuthContext.js';

const CustomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, dispatch } = useContext(AuthContext);
    user ? console.log(user) : console.log("no hay usuario");

    const menuItems = [
        {
            name: "Inicio",
            path: "/",

        },
        {
            name: "Admisiones",
            path: "/admisiones",

        },
        {
            name: "Nosotros",
            path: "/nosotros",
        }, {
            name: "Contactanos",
            path: "/contactanos",
        }


    ];

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        window.location.href = '/';
    }

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">GDPAZ</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color='foreground' href="admisiones">
                        Admisiones
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="nosotros">
                        Nosotros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="contactanos">
                        Contactanos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {
                    user ? <>
                    <NavbarItem>
                        <Button as={Link} color="default" href="/" variant="flat">
                            {user.username}
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="secondary" onClick={handleLogout} variant="flat">
                            cerrar sesion
                        </Button>
                    </NavbarItem>
                    </>
                    
                    
                        : <>
                            <NavbarItem>
                                <Button as={Link} className='bg-teal-500 text-white' href="/login" variant="flat">
                                    login
                                </Button>
                            </NavbarItem>
                        </>

                }


            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                            }
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name} {/* Fix: Use item.name instead of item */}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </NextUINavbar>
    );
}

export default CustomNavbar;

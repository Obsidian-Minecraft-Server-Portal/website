import React from "react";
import {Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import favicon from "../images/favicon.ico"

export default function Navigation()
{
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pages = {
        "Home": "/",
        "Features": "#features",
        "Download": "#download",
        "GitHub": "https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel"
    };

    const menuItems = Object.keys(pages).map((item, index) =>
    {
        const url = Object.values(pages)[index];
        const isCurrentPage = window.location.pathname === url || (url.startsWith("#") && window.location.hash === url);
        const isExternal = url.startsWith("http");

        return (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                    href={url}
                    color={isCurrentPage ? "primary" : "foreground"}
                    aria-current="page"
                    size="lg"
                    className="w-full font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200"
                    isExternal={isExternal}
                >
                    {item}
                    {isExternal && <Icon icon="pixelarticons:external-link" width={16} className="ml-2"/>}
                </Link>
            </NavbarMenuItem>
        );
    });

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            className="bg-background/80 backdrop-blur-lg border-b border-divider"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className={"flex flex-row gap-2"}>
                    <Image src={favicon} width={32} />
                    <p className="font-minecraft-header text-primary text-xl">Obsidian MC</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems}
            </NavbarContent>

            <NavbarContent justify="end">
                <Link
                    href="https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel"
                    className="font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200"
                    isExternal
                >
                    <Icon icon="pixelarticons:github" width={20}/>
                </Link>
            </NavbarContent>

            <NavbarMenu>
                {menuItems}
            </NavbarMenu>
        </Navbar>
    );
}
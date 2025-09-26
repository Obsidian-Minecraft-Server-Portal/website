import {useState} from "react";
import {Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import favicon from "../images/favicon.ico";

export default function Navigation()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isBordered
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className={"flex flex-row gap-2"} as={Link} href={"/"}>
                    <Image src={favicon} width={32} className={"min-w-8"}/>
                    <p className="font-minecraft-header text-primary text-xl sm:block">Obsidian MC</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem
                    key={`desktop-home-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200 text-white"
                    onPress={() => window.scrollTo(0, 0)}
                >
                    Home
                </NavbarItem>

                <NavbarItem
                    key={`desktop-features-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200 text-white"
                    onPress={() => window.location.href = "#features"}
                >
                    Features
                </NavbarItem>

                <NavbarItem
                    key={`desktop-download-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200 text-white"
                    onPress={() => window.location.href = "#download"}
                >
                    Downloads
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <Link
                    href="https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel"
                    className="font-minecraft-body hover:bg-default/40 py-2 px-4 transition-background duration-200"
                    isExternal
                >
                    <Icon icon="pixelarticons:github" width={20}/>
                    <span className="ml-2 hidden md:block">GitHub</span>
                </Link>
            </NavbarContent>

            <NavbarMenu className={"flex flex-col gap-8 items-center pt-16"}>
                <NavbarMenuItem
                    key={`mobile-home-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body py-4 px-4 transition-background duration-200 text-white text-[1.5rem] bg-default/20 flex flex-row gap-4"
                    onPress={() =>
                    {
                        window.scrollTo(0, 0);
                        setIsMenuOpen(false);
                    }}
                >
                    <Icon icon={"pixelarticons:home"}/>
                    Home
                </NavbarMenuItem>

                <NavbarMenuItem
                    key={`mobile-features-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body py-4 px-4 transition-background duration-200 text-white text-[1.5rem] bg-default/20 flex flex-row gap-4"
                    onPress={() =>
                    {
                        window.location.href = "#features";
                        setIsMenuOpen(false);
                    }}
                >
                    <Icon icon={"pixelarticons:subscriptions"}/>
                    Features
                </NavbarMenuItem>

                <NavbarMenuItem
                    key={`mobile-download-navigation`}
                    as={Link}
                    aria-current="page"
                    className="w-full font-minecraft-body py-4 px-4 transition-background duration-200 text-white text-[1.5rem] bg-default/20 flex flex-row gap-4"
                    onPress={() =>
                    {
                        window.location.href = "#download";
                        setIsMenuOpen(false);
                    }}
                >
                    <Icon icon={"pixelarticons:download"}/>
                    Downloads
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import CreateDripModal from "../modal/CreateDripModal";

const DripNavbar = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold">Drippie</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <CreateDripModal />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default DripNavbar;
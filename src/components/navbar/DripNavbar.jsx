import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import NewDripModal from "../modal/NewDripModal";

const DripNavbar = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold">Drippie</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <NewDripModal />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default DripNavbar;
"use client"
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
const NavbarDropdown = () => {
    const router = useRouter()

    const handleNavigation = (pathname: string) => {
        router.push(pathname)
    }
    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar name="Joe" className="cursor-pointer"/>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                
                    <DropdownItem onClick={() => handleNavigation('/profile')}>Profile</DropdownItem>
                
                
                    <DropdownItem onClick={() => handleNavigation('/profile/settings')}>Settings</DropdownItem>
               
                
                    <DropdownItem onClick={() => handleNavigation('/profile/create-post')}>Create Post</DropdownItem>
                
                
                
            </DropdownMenu>
        </Dropdown>
    )
}

export default NavbarDropdown
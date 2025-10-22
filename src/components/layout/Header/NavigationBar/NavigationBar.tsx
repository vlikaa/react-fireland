import NavigationItem from "@/components/layout/Header/NavigationBar/NavigationItem/NavigationItem.tsx";

function NavigationBar() {
    return (
        <nav className="flex gap-[30px]">
            <NavigationItem href="#">Biz</NavigationItem>
            <NavigationItem href="#">Mükafatlar</NavigationItem>
            <NavigationItem href="#">Məlumat</NavigationItem>
        </nav>
    )
}

export default NavigationBar
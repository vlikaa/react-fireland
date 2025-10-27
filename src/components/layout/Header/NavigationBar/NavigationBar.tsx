import NavigationItem from "@/components/layout/Header/NavigationBar/NavigationItem/NavigationItem.tsx";

function NavigationBar() {
    return (
        <nav className="flex gap-[30px]">
            <NavigationItem href="#about">Biz</NavigationItem>
            <NavigationItem href="#info">Məlumat</NavigationItem>
			<NavigationItem href="#reward">Mükafatlar</NavigationItem>
        </nav>
    )
}

export default NavigationBar
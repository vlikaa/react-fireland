import Logo from "@/components/common/Logo/Logo.tsx";
import NavigationBar from "@/components/layout/Header/NavigationBar/NavigationBar.tsx";
import GradientButton from "@/components/common/GradientButton/GradientButton.tsx";
import LanguageSwitcher from "@/components/common/LanguageSwitcher/LanguageSwitcher.tsx";

function Header() {
    return (
        <header className="px-[24px] xl:px-[34px] h-[80px] bg-[#170A00] text-white flex items-center justify-between">
            <Logo />
            <NavigationBar />
            <div className="flex items-center gap-[20px]">
                <LanguageSwitcher />
                <GradientButton />
            </div>
        </header>
    )
}

export default Header

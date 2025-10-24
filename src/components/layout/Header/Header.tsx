import { useState } from 'react'
import Logo from '@/components/common/Logo/Logo'
import NavigationBar from '@/components/layout/Header/NavigationBar/NavigationBar'
import Button from '@/components/common/Button/Button.tsx'
import LanguageSwitcher from '@/components/common/LanguageSwitcher/LanguageSwitcher'
import BurgerButton from '@/components/common/BurgerButton/BurgerButton.tsx';
import BurgerMenu from '@/components/common/BurgerMenu/BurgerMenu.tsx';

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const handleMenuClose = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className="px-[24px] xl:px-[34px] h-[80px] bg-[#170A00] text-white flex items-center justify-between relative">
			<Logo />

			<div className="hidden xl:block">
				<NavigationBar />
			</div>

			<div className="hidden xl:flex xl:items-center xl:gap-[20px]">
				<LanguageSwitcher />
				<Button background={'gradient'}>Qoşulun</Button>
			</div>

			<BurgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
			<BurgerMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
		</header>
	)
}

export default Header
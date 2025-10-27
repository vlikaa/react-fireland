import { useEffect, useRef } from 'react'
import Button from '@/components/common/Button/Button.tsx'

interface BurgerMenuProps {
	isOpen: boolean
	onClose: () => void
}

function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null)

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
		e.preventDefault()
		onClose()

		setTimeout(() => {
			const targetElement = document.getElementById(targetId)
			if (targetElement) {
				const headerHeight = 80
				const elementPosition = targetElement.getBoundingClientRect().top
				const offsetPosition = elementPosition + window.pageYOffset - headerHeight

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				})
			}
		}, 100)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const isBurgerButton = (event.target as Element).closest('button.xl\\:hidden')

			if (menuRef.current && !menuRef.current.contains(event.target as Node) && !isBurgerButton) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [isOpen, onClose])

	useEffect(() => {
		const handlePopState = () => {
			if (isOpen) {
				onClose()
			}
		}

		if (isOpen) {
			window.history.pushState({ menuOpen: true }, '')
			window.addEventListener('popstate', handlePopState)
		}

		return () => {
			window.removeEventListener('popstate', handlePopState)
			if (window.history.state?.menuOpen) {
				window.history.back()
			}
		}
	}, [isOpen, onClose])

	return (
		<div
			ref={menuRef}
			className={`
				xl:hidden absolute top-full left-0 right-0 bg-[#170A00] 
				transition-all duration-300 overflow-hidden
				${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
			`}
		>
			<div className="px-[30px]">
				<nav className="flex flex-col gap-[30px]">
					<a
						href="#about"
						className="hover:text-orange-400 transition font-inter text-[17px] py-2"
						onClick={(e) => handleNavClick(e, 'about')}
					>
						Biz
					</a>
					<a
						href="#info"
						className="hover:text-orange-400 transition font-inter text-[17px] py-2"
						onClick={(e) => handleNavClick(e, 'info')}
					>
						Malumat
					</a>
					<a
						href="#reward"
						className="hover:text-orange-400 transition font-inter text-[17px] py-2"
						onClick={(e) => handleNavClick(e, 'reward')}
					>
						Mükafatlar
					</a>
				</nav>

				<div className="flex justify-center mt-[37px] mb-[28px]">
					<Button background={'gradient'} size={'narrow'} onClick={onClose}>
						Qoşulun
					</Button>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
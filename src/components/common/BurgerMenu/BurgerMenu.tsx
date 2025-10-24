import Button from '@/components/common/Button/Button.tsx'

interface BurgerMenuProps {
	isOpen: boolean
	onClose: () => void
}

function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
	return (
		<div className={`
      xl:hidden absolute top-full left-0 right-0 bg-[#170A00] 
      transition-all duration-300 overflow-hidden
      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
    `}>
			<div className="px-[30px]">
				<nav className="flex flex-col gap-[30px]">
					<a
						href="#"
						className="hover:text-orange-400 transition font-inter text-[17px]"
						onClick={onClose}
					>
						Biz
					</a>
					<a
						href="#"
						className="hover:text-orange-400 transition font-inter text-[17px]"
						onClick={onClose}
					>
						Mükafatlar
					</a>
					<a
						href="#"
						className="hover:text-orange-400 transition font-inter text-[17px]"
						onClick={onClose}
					>
						Malumat
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
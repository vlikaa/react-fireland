import type { ReactNode } from 'react';

interface GradientButtonProps {
	children: ReactNode
	background?: 'gradient' | 'white'
	size?: 'wide' | 'narrow'
	onClick?: () => void
}

function Button({ children, background = 'gradient', size = 'narrow', onClick}: GradientButtonProps) {

	const backgroundClasses = {
		gradient: 'text-white bg-gradient-to-r from-[#FF6A00] to-[#FF0900] hover:from-[#FF6A00] hover:to-[#FFB400] active:from-[#FF0900] active:to-[#FF6A00]',
		white: 'text-[#FF0900] bg-white hover:bg-[#FFB400] hover:text-white active:bg-[#FF6A00]'
	}

	const sizeClasses = {
		wide: 'w-[335px] xl:w-[386px] h-[40px] xl:h-[50px]',
		narrow: 'w-[120px] h-[40px]',
	}

	return (
		<button className={`font-rubik h-[40px] w-[183px] rounded-[4px] text-[18px] xl:text-[20px] hover:cursor-pointer ${backgroundClasses[background]} ${sizeClasses[size]}`} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
import type { ReactNode } from 'react';

interface FeatureCardProps {
	children: ReactNode
	icon: string
	size?: 'wide' | 'narrow'
	font?: 'bold' | 'normal'
}

function FeatureCard({ children, icon, size = 'narrow', font = 'normal' }: FeatureCardProps) {
	const sizeClasses = {
		wide: 'w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]',
		narrow: 'w-[17px] h-[17px] xl:w-[24px] xl:h-[24px]',
	}

	const fontClasses = {
		bold: 'font-semibold text-[24px] xl:text-[32px] ',
		normal: 'text-[12px] xl:text-[20px] ',
	}

	return (
		<div className="flex gap-[10px] xl:gap-[15px] items-center">
			<img src={ icon } alt="hat icon" className={`${sizeClasses[size]}`} />
			<p className={`font-rubik ${fontClasses[font]}`}>
				{ children }
			</p>
		</div>
	)
}

export default FeatureCard
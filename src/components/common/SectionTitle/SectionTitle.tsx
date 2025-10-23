import type { ReactNode } from 'react';

interface SectionTitleProps {
	children: ReactNode
}

function SectionTitle({ children }: SectionTitleProps) {
	return (
		<h2 className="font-poppins font-bold text-[32px] xl:text-[48px] bg-gradient-to-r from-[#FF6A00] to-[#FFB400] bg-clip-text text-transparent">
			{ children }
		</h2>
	)
}

export default SectionTitle
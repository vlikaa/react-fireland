import type { ReactNode } from 'react';

interface GradientBorderBoxProps {
	children: ReactNode
}

function GradientBorderBox({
							   children,
						   }: GradientBorderBoxProps) {
	return (
		<div className="relative">
			<div className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#FF0900] to-[#FF6A00] p-[3px]">
				<div className="w-full h-full bg-[#1A1A1A] rounded-[12px]"></div>
			</div>

			<div className="relative px-[20px] xl:px-[40px] py-[20px] xl:py-[30px]">
				{children}
			</div>
		</div>
	)
}

export default GradientBorderBox
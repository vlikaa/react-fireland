import type { ReactNode } from 'react';

interface RewardPedestalProps {
	children: ReactNode
}

function RewardPedestal({ children }: RewardPedestalProps ) {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 gap-y-[30px] xl:gap-y-[20px] xl:gap-x-[400px]">
			{ children }
		</div>
	)
}

export default RewardPedestal
interface TierProps {
	reward: string
	title: string
	className?: string
}

function Tier({ reward, title, className = '' }: TierProps) {
	return (
		<div className={ `flex flex-col gap-[10px] xl:gap-[20px] items-center ${className}` }>
			<p className="font-rubik font-semibold text-[24px] xl:text-[32px]">
				{ reward }
			</p>

			<div className="w-[335px] xl:w-[390px] h-0.5 bg-[#FF6A00]"></div>

			<p className="font-rubik font-bold text-[12px] xl:text-[20px]">
				{ title }
			</p>
		</div>
	)
}

export default Tier
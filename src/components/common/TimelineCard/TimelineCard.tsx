
interface TimelineCardProps {
	icon: string
	title: string
	description: string
}

function TimelineCard({ icon, title, description }: TimelineCardProps) {
	return (
		<div className="flex gap-[15px] xl:gap-[20px] items-center">
			<img src={icon} alt="icon" className="h-[40px] xl:h-[60px]" />
			<div className="flex flex-col gap-[5px] xl:gap-[10px]">
				<h3 className="font-rubik font-semibold text-[23px] xl:text-[32px]">{ title }</h3>
				<p className="font-rubik font-bold text-[12px] xl:text-[20px] text-[#FF6A00]">{ description }</p>
			</div>
		</div>
	)
}

export default TimelineCard
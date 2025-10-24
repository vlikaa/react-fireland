import iria from '@assets/iria.svg'
import oyu from '@assets/oyu.svg'


function Sponsors() {
	return (
		<div className="flex justify-center gap-[80px] xl:gap-[250px] py-[100px] xl:py-[150px]">
			<img src={iria} alt="IRIA Logo" className="xl:h-[250px]" />
			<img src={oyu} alt="OYU Logo" className="xl:h-[250px]" />
		</div>
	)
}

export default Sponsors
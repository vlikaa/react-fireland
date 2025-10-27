import clock from '@assets/icons/hero/clock.svg'
import pointer from '@assets/icons/hero/pointer.svg'
import Button from '@/components/common/Button/Button.tsx';

function Hero() {
	return (
		<div id="hero" className="flex flex-col items-center bg-[url('@assets/hero-background.svg')] xl:bg-[url('@assets/xl-hero-background.svg')] bg-cover bg-center px-[20px] xl:px-[40px]">
			<h1 className="font-poppins font-bold text-center text-[38px] xl:text-[64px] mt-[101px] xl:mt-[169px]">İdeyalarını alova çevir &lt;!&gt;</h1>
			<p className="text-[16] xl:text-[20] font-inter font-medium text-center mt-[28px] xl:mt-[30px] mb-[68px] xl:mb-[77px]">Odlar Yurdu Universitetinin 30 illiyinə həsr olunmuş ilk böyük Hackathon</p>
			<Button background={'white'} size={'wide'}>Qoşulun</Button>
			<div className="w-full flex flex-col items-center gap-[20px] xl:flex-row xl:justify-between mt-[100px] xl:mt-[130px] mb-[50px] text-[16px] xl:text-[20px] font-rubik">
				<div className="flex gap-[10px] xl:gap-[20px] items-center">
					<img src={clock} alt="Clock" className="w-[20px] h-[20px] xl:w-[37.5px] xl:h-[37.5px]" />
					<p>29 noyabr</p>
				</div>
				<div className="flex gap-[10px] xl:gap-[20px] items-center">
					<img src={pointer} alt="Pointer" className="w-[20px] h-[20px] xl:w-[40px] xl:h-[40px]" />
					<p>Odlar Yurdu universiteti</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
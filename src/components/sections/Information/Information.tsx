import SectionTitle from '@/components/common/SectionTitle/SectionTitle.tsx';
import TimelineCard from '@/components/common/TimelineCard/TimelineCard.tsx';
import clock from '@assets/icons/information/clock.svg';
import time from '@assets/icons/information/time.svg';
import fire from '@assets/icons/information/fire.svg';
import pointer from '@assets/icons/information/pointer.svg';
import load from '@assets/icons/information/load-arrow.svg';
import oyu from '@assets/oyu.png';

function Information() {
	return (
		<div id="info" className="pt-[50px] xl:pt-[100px] pb-[50px] px-[20px] xl:px-[40px]">
			<div className="flex flex-col gap-[20px] xl:gap-[30px] items-center xl:items-start">
				<SectionTitle>Harada və nə vaxt?</SectionTitle>
				<p className="text-center xl:text-left font-rubik text-[16px] xl:text-[20px]">FireLand Hackathon səni
					gözləyir — alovu burada hiss et!</p>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mt-[50px] xl:mt-[60px] ">
				<TimelineCard icon={ clock } title={ 'Qeydiyyat müddəti:' } description={ '3 Noyabr — 16 Noyabr' }/>
				<img src={ oyu } alt="oyu png" className="hidden xl:block w-[590px] h-[250px] row-span-2 mt-[15px]"/>
				<TimelineCard icon={ time } title={ 'Seçim mərhələsi:' } description={ '17 Noyabr — 28 Noyabr' }/>
				<TimelineCard icon={ fire } title={ 'Hackathon tarixi:' } description={ '29-30 Noyabr' }/>
				<TimelineCard icon={ pointer } title={ 'Odlar Yurdu Universiteti' }
							  description={ '13 Koroğlu Rəhimov küçəsi, Bakı 1072' }/>
			</div>

			<div className="mt-[60px]">
				<button
					className="w-[335px] xl:w-[386px] h-[40px] xl:h-[50px] font-rubik rounded-[4px] text-[18px] xl:text-[20px] hover:cursor-pointer text-white bg-[#FF6A00] hover:bg-[#FF5900] active:bg-[#FF0300]">
					<div className="flex justify-center gap-[5px] xl:gap-[1px] items-center w-full h-full">
						<p className="font-rubik text-[18px] xl:text-[20px]">Daha çox məlumatı yüklə</p>
						<img src={ load } alt="load-arrow" />
					</div>
				</button>
			</div>
		</div>
	)
}

export default Information
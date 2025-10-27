import SectionTitle from '@/components/common/SectionTitle/SectionTitle.tsx';
import RewardPedestal from '@/components/sections/Prizes/RewardPedestal/RewardPedestal.tsx';
import Tier from '@/components/sections/Prizes/RewardPedestal/Tier/Tier.tsx';

function Prizes() {
	return (
		<div id="reward" className="px-[20px] xl:px-[40px] pt-[50px] xl:pt-[100px]">
			<div className="flex flex-col items-center xl:items-start">
				<SectionTitle>Mükafatlar</SectionTitle>
				<p className="text-center xl:text-left font-rubik text-[16px] xl:text-[20px] mt-[20px] xl:mt-[30px] mb-[50px] xl:mb-[60px]">
					Ən uğurlu ideyalar aşağıdakı dəyərli mükafatlarla təltif ediləcək:
				</p>
			</div>

			<RewardPedestal>
				<Tier reward="1000 AZN" title="1-ci ver" className="xl:col-span-2 [&>p:first-child]:text-[#FF6A00]"/>
				<Tier reward="600 AZN" title="2-ci ver"/>
				<Tier reward="300 AZN" title="3-ci ver"/>
			</RewardPedestal>
		</div>
	)
}

export default Prizes
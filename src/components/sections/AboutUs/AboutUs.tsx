import SectionTitle from '@/components/common/SectionTitle/SectionTitle.tsx';
import GradientBorderBox from '@/components/common/GradientBorderBox/GradientBorderBox.tsx';
import FeatureCard from '@/components/common/FeatureCard/FeatureCard.tsx';
import hat from '@assets/icons/aboutUs/hat.svg'
import heart from '@assets/icons/aboutUs/heart.svg'
import earth from '@assets/icons/aboutUs/earth.svg'
import person from '@assets/icons/aboutUs/person.svg'
import thunder from '@assets/icons/aboutUs/thunder.svg'
import persons from '@assets/icons/aboutUs/persons.svg'
import hands from '@assets/icons/aboutUs/hands.svg'

function AboutUs() {
	return (
		<div
			className="flex flex-col items-center xl:items-start px-[20px] xl:px-[40px] pt-[50px] xl:pt-[100px] pb-[50px]">
			<SectionTitle>FireLand haqqında</SectionTitle>

			<p className="text-center mt-[20px] xl:mt-[30px] mb-[30px] xl:mb-[60px] text-[16px] xl:text-[20px] font-rubik text-white">
				<span className="text-[#FF6A00]">FireLand </span>
				— Odlar Yurdu Universitetinin
				<span className="text-[#FF6A00]"> 30 </span>
				illik yubileyinə həsr olunmuş ilk böyük Hackathon!
			</p>

			<div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-[25px] xl:gap-[30px]">
				<div className="xl:col-span-2">
					<GradientBorderBox>
						<div className="flex flex-col items-center xl:items-start gap-[20px]">
							<h3 className="font-rubik font-semibold text-[24px] xl:text-[32px]">Məqsəd</h3>
							<p className="font-rubik text-[12px] xl:text-[20px] text-center xl:text-left mb-[14px] xl:mb-0">
								FireLand-ın əsas məqsədi gəncləri yaradıcılığa, komanda işinə və problemlərin innovativ
								həllinə təşviq etməkdir.
								<br/><br/>
								İki gün ərzində iştirakçılar real dünyadan gələn çağırışlara cavab tapmağa çalışacaq,
								yeni
								ideyalar formalaşdıracaq və layihələrini müxtəlif sahələr üzrə ekspertlərə təqdim
								edəcəklər.
							</p>
						</div>

					</GradientBorderBox>
				</div>

				<div>
					<GradientBorderBox>
						<div className="flex flex-col items-center xl:items-start gap-[20px]">
							<h3 className="font-rubik font-semibold text-[24px] xl:text-[32px]">İstiqamətlər</h3>
							<div className="flex flex-col gap-[20px]">
								<FeatureCard icon={ hat }>EdTech – təhsilin gələcəyini formalaşdıran rəqəmsal
									həllər</FeatureCard>
								<FeatureCard icon={ heart }>HealthTech – sağlamlıq və rifah üçün texnoloji
									yanaşmalar</FeatureCard>
								<FeatureCard icon={ earth }>GreenTech – ekoloji davamlılıq və yaşıl
									innovasiyalar</FeatureCard>
								<FeatureCard icon={ person }>Sosial Həllər – cəmiyyətin inkişafına yönəlmiş yaradıcı
									ideyalar</FeatureCard>
								<p className="font-rubik text-[12px] xl:text-[20px] text-center xl:text-left mb-[24px] xl:mb-0">və digər innovativ istiqamətlər...</p>
							</div>
						</div>

					</GradientBorderBox>
				</div>
				<div>
					<GradientBorderBox>
						<div className="flex flex-col gap-[20px] xl:gap-[62px] py-[10px] xl:py-[15px]">
							<FeatureCard icon={ thunder } size={'wide'} font={'bold'}>2 gün ərzində</FeatureCard>
							<FeatureCard icon={ persons } size={'wide'} font={'bold'}>16 komanda</FeatureCard>
							<FeatureCard icon={ hands } size={'wide'} font={'bold'}>Mentor sessiyaları</FeatureCard>
						</div>
					</GradientBorderBox>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
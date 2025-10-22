import SectionTitle from '@/components/common/SectionTitle/SectionTitle.tsx';
import GradientButton from '@/components/common/GradientButton/GradientButton.tsx';

function Footer() {
	return (
		<>
			<div className="flex flex-col items-center ">
				<SectionTitle>Qeydiyyatdan keç</SectionTitle>
				<p className="mt-[30px] mb-[60px]">Öz komandana qoşul, ideyana güvən və FireLand-də gələcəyin bir parçası ol!</p>
				<GradientButton></GradientButton>
			</div>
		</>
	)
}

export default Footer
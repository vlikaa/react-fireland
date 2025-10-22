import SectionTitle from '@/components/common/SectionTitle/SectionTitle.tsx';
import Button from '@/components/common/Button/Button.tsx';

function Footer() {
	return (
		<footer className="flex flex-col items-center  px-[20px] xl:px-[40px]">
			<SectionTitle>Qeydiyyatdan keç</SectionTitle>
			<p className="mt-[20px] mb-[50px] xl:mt-[30px] xl:mb-[60px] text-center">Öz komandana qoşul, ideyana güvən və FireLand-də gələcəyin
				bir parçası ol!</p>
			<Button background={"white"} size={'wide'}>Qoşulun</Button>
			<div className="flex justify-center xl:justify-between w-full mt-[50px] xl:mt-[100px] mb-[50px]">
				<p className="hidden xl:block">+994 50 500 50 50</p>
				<p>© 2025 FireLand</p>
				<p className="hidden xl:block">Example@gmail.com</p>
			</div>
		</footer>
	)
}

export default Footer
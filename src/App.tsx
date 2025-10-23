import './App.css'
import Layout from '@/components/layout/Layout.tsx';
import Hero from '@/components/sections/Hero/Hero.tsx';
import AboutUs from '@/components/sections/AboutUs/AboutUs.tsx';
import Information from '@/components/sections/Information/Information.tsx';
import Prizes from '@/components/sections/Prizes/Prizes.tsx';
import Sponsors from '@/components/sections/Sponsors/Sponsors.tsx';

function App() {
    return (
        <>
            <Layout>
				<Hero />
				<AboutUs />
				<Information />
				<Prizes />
				<Sponsors />
			</Layout>
        </>
    )
}

export default App

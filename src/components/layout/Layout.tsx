import type { ReactNode } from 'react';
import Header from '@/components/layout/Header/Header.tsx';
import Footer from '@/components/layout/Footer/Footer.tsx';


interface LayoutProps {
	children: ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<div className="min-h-screen bg-[#1A1A1A]">
			<Header />
			<main>
				{ children }
			</main>
			<Footer />
		</div>
	)
}

export default Layout
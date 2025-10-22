interface NavItemProps {
    href: string
    children: React.ReactNode
}

function NavigationItem({href, children}: NavItemProps) {
    return (
        <a
            href={href}
            className="font-inter text-lg"
        >
            {children}
        </a>
    )
}

export default NavigationItem
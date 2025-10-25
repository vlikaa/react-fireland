import logo from '@assets/icons/header/fireland.svg'

function Logo() {
    return (
        <div className="w-[100px] xl:w-[150px]">
            <img src={logo} alt="Fireland" />
        </div>
    )
}

export default Logo
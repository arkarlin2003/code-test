import { Link } from "react-router-dom"

const menus = [
    'Shipping',
    'FAQ',
    'Contact',
    'Eng | S',
]

const MenuLists = () => {
    return (
        <ul className="flex items-center space-x-6">
        {
            menus.map(menu=>(
                <li key={menu} className="text-[14px]">
                    <Link to={'/'}>{menu}</Link>
                </li>
            ))
        }
    </ul>
    )
}

const SubHeader = () => {
  return (
    <header className="bg-[#7C3FFF] w-full h-[40px] px-[150px] py-[12px] font-poppin flex items-center justify-between text-white">
        <h4 className="text-[14px]">Support (00) 33 169 7720</h4>
        <h4 className="text-[14px]">Free US shipping an all orders $100+ <Link to={'/'} className=" underline">Learn more</Link></h4>
        <MenuLists/>
    </header>
  )
}

export default SubHeader
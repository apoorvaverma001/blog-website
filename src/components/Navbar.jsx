import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/logo.png" className="w-8 h-8" alt="logo"/>
                <span>logo</span>
            </div>
            
            {/* mobile view */}
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
                    {open ? "X" : "#"}

                </div>
                {/* menu list */}
                <div className= {`w-full h-screen flex flex-col items-center justify-center gap-8 font-meduim text-lg absolute top-16 bg-pink-200 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Popular</a>
                    <a href="/">About me</a>
                    <a  href="/">
                    <button className='py-2 px-4 rounded-3xl bg-red-400 text-yellow-800'>Login 🧸</button>
                    </a>
                </div>
            </div>
            {/* desktop view */}


            {/*desktop menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-yellow-800">
                
                <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Popular</a>
                <a href="/">About me</a>
                <a  href="/">
                <button className='py-2 px-4 rounded-3xl bg-red-400 text-yellow-800'>Login 🧸</button>
                </a>
               
            </div>
            
            
            </div>
    )
}

export default Navbar
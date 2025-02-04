const Header = () => {
    return (
        <div className="w-[90%] mx-auto mt-8">
            <nav className="w-full text-white flex justify-between items-center">
                <div className="flex items-center gap-x-[11px]">
                    <div className="w-[52px] h-[52px] rounded-full"><img src="/images/logo-header.png" alt="" className="" /></div>
                    
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold">گروه تجربه توسعه امکان</span>
                        <div className="w-full h-[0.25px] bg-[#ffffff]"></div>
                        <span className="text-xs">Emkan Developmenet Experience Group</span>
                    </div>
                </div>

                <div className="flex gap-x-[46px] items-center text-base font-normal child:leading-6">
                    <div><span>FA</span><span className="mx-1">|</span><span>EN</span></div>
                    <span>خانه</span>
                    <span>ایران آینده را با هم می سازیم</span>
                </div>
            </nav>
        </div>
    );
}

export default Header;
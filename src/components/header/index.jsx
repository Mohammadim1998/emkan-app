const Header = () => {
    return (
        <div className="w-full mx-auto mt-8 flex justify-center">
            <nav className="w-[95%] text-white flex justify-between items-center">
                <div className="flex items-center gap-x-[11px]">
                    <div className="w-[41px] h-[41px] lg:w-[52px] lg:h-[52px] rounded-full"><img src="/images/logo-header.png" alt="" className="" /></div>

                    <div className="flex flex-col">
                        <span className="text-base lg:text-2xl font-extrabold">گروه تجربه توسعه امکان</span>
                        <div className="w-full h-[0.25px] bg-[#ffffff]"></div>
                        <span className="text-[8px] lg:text-xs">Emkan Developmenet Experience Group</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-x-[46px] items-center text-[10px] lg:text-base font-normal child:leading-6">
                    <div className="flex items-center gap-x-[20px] lg:gap-x-[46px]">
                        <div><span>FA</span><span className="mx-1">|</span><span>EN</span></div>
                        <span>خانه</span>
                    </div>

                    <div>
                        <span>ایران آینده را با هم می سازیم</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
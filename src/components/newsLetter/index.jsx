"use client";
import Instagram from "@/icons/instagram";
import "./newsletterStyle.css";
import ArrowDown from "@/icons/arrowDown";
import { useState } from "react";

const NewsLetter = () => {
    const [newsletterr, setNewsletterr] = useState("");

    const formSubmiter = (event) => {
        event.preventDefault();

        console.log("NewsLetter: ", newsletterr);

    }

    return (
        <div className="w-full  flex flex-col items-center">
            <div className="w-[95%] lg:w-[648px] flex flex-col justify-between items-center p-4">
                <h1 className="text-white text-[24px] lg:text-5xl font-normal mb-6 lg:mb-12">فصلی تازه در مسیر توسعه</h1>

                <div className="w-full bg-[#0000002B] backdrop-blur-md px-6 py-8 rounded-[10px]">
                    <form onSubmit={formSubmiter}>
                        <span className="text-white font-normal leading-8 mb-4 lg:mb-5 block">از زمان رونمایی باخبر شوید!</span>
                        <div className="w-full h-9 lg:h-12 mb-12 lg:mb-14">
                            <input
                                type="text"
                                className="w-full h-full rounded px-4"
                                value={newsletterr}
                                onChange={(event) => setNewsletterr(event.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-x-3 mb-6">
                            <input type="checkbox" className="newsletter-checkbox" />
                            <span className="text-white font-normal text-base">بله، من را در خبرنامه مشترک کنید</span>
                        </div>

                        <button type="submit" className="w-full h-9 lg:h-12 bg-[#0E272D] rounded text-white font-normal text-base">همین حالا عضو شوید</button>
                    </form>
                </div>

                <div className="w-8 h-8 mx-auto bg-[#0E272D] rounded-full mt-3 mb-6 lg:mt-5 lg:mb-[49px] text-white flex justify-center items-center cursor-pointer"><div className="w-5 h-5"><ArrowDown /></div></div>
            </div>
            {/******************* ABOUT ME SECTION ********************/}
            <div className="w-full bg-[#171010C4] flex justify-center text-white">
                <div className="w-[75%] h-full my-6">
                    <div className="flex flex-col justify-center items-center mb-10">
                        <span className="font-medium text-2xl leading-10 ">درباره ما</span>
                        <p className="font-normal text-sm leading-6 text-center">ما در گروه تجربه توسعه امکان بر آنیم که فصل تازه‌ای در مسیر توسعه پایدار ایران رقم بزنیم. با تمرکز بر بهره‌برداری از ظرفیت‌های بی‌نظیر سرزمینی و خلق ارزش‌های ماندگار، بستری نوآورانه را برای پیشرفت و همبستگی اقتصادی ایجاد خواهیم کرد. ما به‌زودی با پروژه‌ها و خدماتی که توسعه و رفاه ایران را هدف گرفته‌اند، در کنار شما خواهیم بود.                </p>
                    </div>

                    <div className="flex flex-col justify-center items-center mb-6">
                        <span className="font-medium text-2xl leading-10">آدرس:</span>
                        <address className="text-center">دفتر مرکـــــــزی: تهران، پاسداران، اختیاریه جنوبی، ساختمان هومهر، طبقه ۲، واحد ۴، کدپستی: ۱۹۴۶۷۸۳۷۴۷</address>
                        <address className="text-center">دفتر منطقه‌ای: منطقه آزاد چابهار، مجتمع بیزینس سنتر چابهار، طبقه ۳، واحد ۳۰۸، کدپستی: ۹۹۷۱۷۶۴۳۹۸</address>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <address className="text-center">ایمیل: info@emkan.world</address>
                        <address className="text-center">شماره تماس: ۰۹۱۲۲۴۹۸۴۸۸- ۰۲۱۲۲۵۸۰۶۹۵ </address>
                    </div>
                    <div className="w-10 h-10 mx-auto mt-4"><Instagram /></div>
                </div>
            </div>
        </div >
    );
}

export default NewsLetter;
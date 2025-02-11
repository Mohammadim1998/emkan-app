"use client";
import Instagram from "@/icons/instagram";
import "./newsletterStyle.css";
import ArrowDown from "@/icons/arrowDown";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NewsLetter = () => {
    const [newsletterr, setNewsletterr] = useState("");

    const formSubmiter = (event) => {
        event.preventDefault();
    }

    const t = useTranslations("NewsLetter");


    return (
        <div className="w-full  flex flex-col items-center">
            <div className="w-[95%] lg:w-[648px] flex flex-col justify-between items-center p-4">
                {/* <h1 className="text-white text-[24px] lg:text-5xl font-normal mb-6 lg:mb-12">فصلی تازه در مسیر توسعه</h1> */}
                <h1 className="text-white text-[24px] lg:text-5xl font-normal mb-6 lg:mb-12">{t('newsLetter-slogan')}</h1>

                <div className="w-full bg-[#0000002B] backdrop-blur-md px-6 py-8 rounded-[10px]">
                    <form onSubmit={formSubmiter}>
                        <span className="text-white font-normal leading-8 mb-4 lg:mb-5 block">{t('newsLetter-unveiling')}</span>
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
                            <span className="text-white font-normal text-base">{t('newsLetter-subscribe-news')}</span>
                        </div>

                        <button type="submit" className="w-full h-9 lg:h-12 bg-[#0E272D] rounded text-white font-normal text-base">{t('newsLetter-subscribe')}</button>
                    </form>
                </div>

                <div className="w-8 h-8 mx-auto bg-[#0E272D] rounded-full mt-3 mb-6 lg:mt-5 lg:mb-[49px] text-white flex justify-center items-center cursor-pointer"><div className="w-5 h-5"><ArrowDown /></div></div>
            </div>
            {/******************* ABOUT ME SECTION ********************/}
            <div className="w-full bg-[#171010C4] flex justify-center text-white">
                <div className="w-[75%] h-full my-6">
                    <div className="flex flex-col justify-center items-center mb-10">
                        <span className="font-medium text-2xl leading-10 ">{t('newsLetter-about')}</span>
                        <p className="font-normal text-sm leading-6 text-center">{t('newsLetter-about-description')}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mb-6">
                        <span className="font-medium text-2xl leading-10">{t('newsLetter-adress')}</span>
                        <address className="text-center">{t('newsLetter-address-description1')}</address>
                        <address className="text-center">{t('newsLetter-address-description2')}</address>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <address className="text-center">{t('newsLetter-email')}: info@emkan.world</address>
                        <address className="text-center">{t('newsLetter-phone')}: ۰۹۱۲۲۴۹۸۴۸۸- ۰۲۱۲۲۵۸۰۶۹۵ </address>
                    </div>
                    <div className="w-10 h-10 mx-auto mt-4">
                        <Link href={"https://www.instagram.com/emkan.world"} target="_blank" className="w-10 h-10"><Instagram /></Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NewsLetter;
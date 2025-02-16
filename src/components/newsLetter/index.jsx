"use client";
import Instagram from "@/icons/instagram";
import "./newsletterStyle.css";
import ArrowDown from "@/icons/arrowDown";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Header from "../header";
import axios from "axios";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [activeForm, setActiveForm] = useState(true);

    const formSubmiter = (event) => {
        event.preventDefault();
        const data = { email };

        try {
            const url = 'https://api.emkan.world/api/Services';
            axios.post(url, data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    //change background images
    const t = useTranslations("NewsLetter");
    useEffect(() => {
        const images = [
            "/images/desktop-img-1.png",
            "/images/desktop-img-2.png",
            "/images/desktop-img-3.png",
            "/images/desktop-img-4.png"
        ];

        let counter = 0;

        const changeBackground = () => {
            // تغییر پس‌زمینه با استفاده از CSS
            document.body.style.backgroundImage = `url(${images[counter]})`;

            // برو به تصویر بعدی، اگر به انتها رسید به اول برمی‌گرده
            counter = (counter + 1) % images.length;
        };

        // تغییر پس‌زمینه هر 2 ثانیه یکبار
        const intervalId = setInterval(changeBackground, 10000);

        // اینتروال را وقتی که کامپوننت حذف شد پاک کنیم
        return () => clearInterval(intervalId);
    }, []);
    //end change background images

    const handeActiveChecked = () => { setActiveForm(!activeForm) };

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-[95%] lg:w-[648px] flex flex-col justify-between items-center mt-16">
                <h1 className="text-white text-[24px] lg:text-5xl font-normal mb-6 lg:mb-12">{t('newsLetter-slogan')}</h1>

                <div className="w-full bg-[#0000002B] backdrop-blur-md px-6 py-8 rounded-[10px]">
                    <form onSubmit={formSubmiter}>
                        <span className="text-white font-normal leading-8 mb-4 lg:mb-5 block">{t('newsLetter-unveiling')}</span>
                        <div className="w-full h-9 lg:h-12 mb-12 lg:mb-14">
                            <input
                                type="text"
                                className="w-full h-full rounded px-4"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-x-3 mb-6">
                            <input type="checkbox" onChange={handeActiveChecked} className="newsletter-checkbox" />
                            <span className="text-white font-normal text-base">{t('newsLetter-subscribe-news')}</span>
                        </div>

                        <button type="submit" disabled={activeForm} className={`${activeForm ? "opacity-50" : "opacity-100"} w-full h-9 lg:h-12 bg-[#0E272D] cursor-pointer rounded text-white font-normal text-base`}>{t('newsLetter-subscribe')}</button>
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
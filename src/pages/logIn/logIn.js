import React from 'react';
import FormLogIn from "./formLogIn";
import BannerLogIn from "./bannerLogIn";
import Button from "../../components/button";

const logIn = () => {
    return (
        <div class="bg-slate-100 flex">
            <BannerLogIn/>
            <div class="flex-1 flex flex-col justify-around">
                <h1 class="text-secondary-gray text-3xl font-bold pl-24">Đăng nhập</h1>
                <FormLogIn/>
                <a >Đăng ký</a>
                <Button textBtn="Đăng nhập"/>    
            </div>
        </div>
    );
};

export default logIn;
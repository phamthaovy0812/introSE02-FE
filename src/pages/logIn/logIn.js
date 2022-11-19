import React from 'react';
import FormLogIn from "./formLogIn";
import BannerLogIn from "./bannerLogIn";
import Button from "../../components/button";

const logIn = () => {
    return (
        <div class="bg-slate-100 flex">
            <BannerLogIn/>
            <div class="flex-1 flex flex-col justify-around">
                <h1 class="text-secondary-gray text-3xl font-bold pl-24 mt-24 ml-3.5">Đăng nhập</h1>
                <FormLogIn/>
                <button class="bg-primary  text-center w-1/4 mb-16 ml-44 py-2 rounded-md font-bold text-lg text-white">Đăng nhập</button> 
            </div>
        </div>
    );
};

export default logIn;
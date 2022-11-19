import React from 'react';

const bannerLogIn = () => {
    return (      
            <div class=" h-screen flex-1 bg-red-600 bg-primary-600 flex flex-col justify-around">
                <h1 class="font-bold text-5xl text-white mx-4  text-center">WELL COME TO - HEAVEN OF BOOKS -</h1>
                <div>
                    <img  src={require("../../assets/bg_log_in.png")} class="m-auto" />
                </div>
                <h4 class="font-pacifico px-20 text-center text-xl " >“Good books, like good friends, are few and chosen;the more select, the more enjoyable.”</h4>
            </div>
    );
};

export default bannerLogIn;
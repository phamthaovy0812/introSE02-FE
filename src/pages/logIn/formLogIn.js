import React from 'react';


const formLogIn = () => {
     
    return (
        <form class=" px-28 ">
            <div class="flex justify-between ">
                <div>
                    <label for="username" class="text-secondary-gray text-xl font-medium">Tài khoảng</label>
                    <input type="text" name="username" placeholder='username' class="bg-amber-50 py-2 w-64 mt-1"></input>
                    <span class="text-orange-500 text-base"></span>
                </div>
                <div>
                    <label for="password" class="text-secondary-gray text-xl font-medium">Mật khẩu</label>
                    <input type="text" name="password" placeholder='password' class="bg-amber-50 py-2 w-64 mt-1"></input>
                    <span class="text-orange-500 text-base"></span>
                </div>
            </div>  
        </form>
        
    );
};

export default formLogIn;
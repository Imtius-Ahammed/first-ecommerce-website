import React from 'react';
import logo from '../../../Assets/Img/logo-white.png';
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook";
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter";
import { GrGoogle } from "@react-icons/all-files/gr/GrGoogle";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaCcPaypal } from "@react-icons/all-files/fa/FaCcPaypal";
import { FaCcVisa } from "@react-icons/all-files/fa/FaCcVisa";
import { FaCcMastercard } from "@react-icons/all-files/fa/FaCcMastercard";
import { FaCcDiscover } from "@react-icons/all-files/fa/FaCcDiscover";
import { SiAmericanexpress } from "@react-icons/all-files/si/SiAmericanexpress";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mx-auto w-full divide-y-2 lg:w-9/12'>
            <footer className="footer text-base-content py-20 px-4 lg:px-0">
                <div className='flex flex-col gap-8 w-full'>
                    <Link to='/' className='text-2xl lg:w-1/3 w-2/3 text-center border-y-4 border-orange-600 bg-orange-50 px-3 py-1 font-serif font-bold'>Ecom BD</Link>
                    <div className='flex flex-col gap-4'>
                        <p className="full lg:w-80">
                            Address:
                            <span className='ml-2'>
                                Dhaka, Bangladesh
                            </span>
                        </p>
                        <p className="w-80">
                            Phone:
                            <span className='ml-2'>
                                01XXXXXXXXXX
                            </span>
                        </p>
                        <p className="w-80">
                            Email:
                            <span className='ml-2 text-orange-500'>
                                ecombd@demo.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                    <div className='flex flex-col gap-8 w-full'>
                        <span className="text-2xl font-semibold">About Us</span>
                        <div className='flex flex-col gap-4'>
                            <p>Shipping</p>
                            <p>Order Tracking</p>
                            <p>FAQs</p>
                            <p>Help</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 w-full'>
                        <span className="text-2xl font-semibold">Connect</span>
                        <div className='flex flex-col gap-4'>
                            <Link className='flex items-center gap-4'><GrFacebook className='text-xl text-slate-500' />Facebook</Link>
                            <Link className='flex items-center gap-4'><GrTwitter className='text-xl text-slate-500' />Twitter</Link>
                            <Link className='flex items-center gap-4'><GrGoogle className='text-xl text-slate-500' />Google</Link>
                            <Link className='flex items-center gap-4'><GrInstagram className='text-xl text-slate-500' />Instagram</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-12 w-full'>
                        <span className="text-2xl font-semibold">Useful Links</span>
                        <div className='grid grid-cols-2 gap-4'>
                            <p>Women</p>
                            <p>Men</p>
                            <p>Kid</p>
                            <p>Accessories</p>
                            <p>Newest Items</p>
                            <p>On Sales</p>
                            <p>Shoes</p>
                            <p>Tops</p>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer flex lg:flex-row flex-col items-center justify-between py-4 px-4 lg:px-0 text-center text-base-content">
                <div className="flex items-center">
                    <p>© Copyright 2023 Ecom BD - All Rights Reserved.</p>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <FaCcPaypal className='text-4xl' />
                    <FaCcVisa className='text-4xl' />
                    <FaCcMastercard className='text-4xl' />
                    <SiAmericanexpress className='text-4xl' />
                    <FaCcDiscover className='text-4xl' />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import Banner from '../../assets/banner.png';
import Logo from '../../assets/logo.png';
import Card1 from '../../assets/card1.png';
import Card2 from '../../assets/card2.png';
import Card3 from '../../assets/card3.png';
import Card4 from '../../assets/card4.png';
import Card5 from '../../assets/card5.png';
import Card6 from '../../assets/card6.png';
import Card7 from '../../assets/card7.png';
import Card8 from '../../assets/card8.png';
import Card9 from '../../assets/card9.png';
import Card10 from '../../assets/card10.png';
import Card11 from '../../assets/card11.png';
import Card12 from '../../assets/card12.png';
import './Home.css';
import { useState } from 'react';


const Home = () => {
    const [data, setData] = useState({});

    const link = [
        {
            img: Card1,
            token: 'JCDB-68B4-HPHU-####',
            url: 'https://offertoday.world/roblox/r'
        },
        {
            img: Card2,
            token: '4E1I-YRZT-4XHY-####',
            url: 'https://offertoday.world/cashapp/c'
        },
        {
            img: Card3,
            token: 'UJZC-G4KK-8OQP-####',
            url: 'https://offertoday.world/fortnite/f'
        },
        {
            img: Card4,
            token: 'HJDN-ORJ2-GVZF-####',
            url: 'https://offertoday.world/amazon/a'
        },
        {
            img: Card5,
            token: '7Z64-RF15-DFNW-####',
            url: 'https://offertoday.world/itunes/i'
        },
        {
            img: Card6,
            token: 'OOY0-Q63V-OWNI-####',
            url: 'https://offertoday.world/walmart/w'
        },
        {
            img: Card7,
            token: '72LO-BAIX-FGGZ-####',
            url: 'https://offertoday.world/xbox/x'
        },
        {
            img: Card8,
            token: 'CJTK-B4YG-G1FN-####',
            url: 'https://offertoday.world/googleplay/g'
        },
        {
            img: Card9,
            token: 'Z6YQ-QV7U-IMF1-####',
            url: 'https://offertoday.world/bestbuy/b'
        },
        {
            img: Card10,
            token: 'EPWD-2BYE-4JXG-####',
            url: 'https://offertoday.world/playstation/p'
        },
        {
            img: Card11,
            token: 'S1R7-VPN4-U9UN-####',
            url: 'https://offertoday.world/steam/s'
        },
        {
            img: Card12,
            token: 'E283-9QCY-RF0Y-####',
            url: 'https://offertoday.world/ebay/e'
        }
    ]

    const handleClick = (id) => {
        window.my_modal_3.showModal()
        const getData = link[id]
        setData(getData);
    };

    return (
        <div className="max-w-screen-md mx-auto py-8 px-8 ">
            <div className='card glass py-6'>
                <div>
                    <img src={Banner} className="mx-auto h-[150px]" alt="banner" />
                    <h2 id="title" className="text-4xl font-bold uppercase text-center glass">FREE GIFT CARD CODE</h2>
                    <img src={Logo} className="mx-auto h-[150px] mt-6" alt="banner" />
                </div>
                <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-12">
                
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(0)}><img src={Card1} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(1)}><img src={Card2} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(2)}><img src={Card3} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(3)}><img src={Card4} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(4)}><img src={Card5} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(5)}><img src={Card6} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(6)}><img src={Card7} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(7)}><img src={Card8} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(8)}><img src={Card9} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(9)}><img src={Card10} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(10)}><img src={Card11} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    <div className="card shadow-2xl">
                        <figure className='cursor-pointer' onClick={() => handleClick(11)}><img src={Card12} alt="car!" className='h-[250px] lg:h-[300px] w-full' /></figure>
                    </div>
                    
                   
                
                </div>
            </div>

            <dialog id="my_modal_3" className="modal card glass rounded-none">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className='flex flex-row space-x-6 justify-around items-center mb-6'>
                        <img src={data.img} alt="" className='h-[180px]'/>
                        <p className='text-center font-semibold text-2xl text-gray-600'>{data.token}</p>
                    </div>
                    <div className='text-center'>
                        <a href={data.url} className='btn btn-sm glass border bg-gray-800 text-white'>Unlock Last code</a>
                    </div>
                </form>
            </dialog>


        </div>
    );
}

export default Home;

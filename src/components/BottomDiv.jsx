import React from 'react'

const BottomDiv = () => {
    return (
        <div id="bottomDiv" className='mt-[20vw] flex justify-between items-start px-[7vw]'>
            <div id="part1" className='w-1/2'></div>
            <div id="part2" className='w-[41%]'>
                <h1 className='text-[6vw] font-thin tracking-[-4px] whitespace-nowrap leading-none'>Blue Pottery <br /> Decorative <br />Vase</h1>
                <div className='flex justify-between w-full mt-10 items-center'>
                    <button id='btn' className='overflow-hidden relative py-5 px-10 rounded-full border-2 text-[1vw] bg-transparent'>
                        <span className='inline-block relative z-20'>Add to cart</span>
                    </button>
                    <h2 className='text-7xl'>$57</h2>
                </div>
            </div>
        </div>
    )
}

export default BottomDiv
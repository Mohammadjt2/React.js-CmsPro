import React from 'react'

interface IUsers {
    img: string,
    name: string,
    date: string,
    profit: string
}

function SidbarLeftUsers({ img, name, date, profit }: IUsers) {
    return (
        <div className='flex justify-between items-center p-3 m-3 cursor-pointer duration-300 bg-yellow-100 rounded-xl shadow hover:shadow-xl hover:mx-1 border border-slate-400'>
            <div className='flex'>
                <img
                    src={img}
                    alt="avatar"
                    className='rounded-full w-10 h-10'
                />
                <div className='mr-4'>
                    <h3 className='font-bold'>{name}</h3>
                    <span className='opacity-75'>{date}</span>
                </div>
            </div>
            <span className='text-lime-600'>{profit}</span>
        </div>
    )
}

export default SidbarLeftUsers
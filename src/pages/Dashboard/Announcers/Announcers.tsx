import React from 'react'
import { MdCategory } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import UserCard from '../../../components/Dashboard/UserCard/UserCard';

export default function Announcers() {
    return (
        <>
        <div>
   <input type="search" placeholder="search ...." className="border-0 border-b border-solid  border-gray-500  outline-none max-w-md  w-full py-2 px-2 text-[1rem]  text-gray-600  font-normal"  />
            
        </div>
            <div className="py-4 gap-5 grid mt-5 grid-cols-3 xxl:grid-cols-4">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            </div>
        </>
    )
}



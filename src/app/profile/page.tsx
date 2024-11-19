"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("Nothing");
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('api/users/me')
        console.log(res.data.data.email);
        setData(res.data.data.email);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2" >
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2 className="p-3 rounded bg-purple-300">
                {data === 'Nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2>
            {/* <h2>{ data == 'Nothing' ? 'Nothing' || <Link href={`/profile/${data}`}></Link> }</h2> */}
            <hr />
            <button 
            onClick={logout}
            className="bg-orange-500 mt-4 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>  
            <button 
            onClick={getUserDetails}
            className="bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Get User Details
            </button>    

        </div>
    )
}
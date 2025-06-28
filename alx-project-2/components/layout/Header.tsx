import React from "react";
import Link from "next/link";

const Header: React.FC = () =>{
    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 py-5">
            <ul className="flex space-x-8 text-lg font-medium text-gray-700 p-20">
                <li>
                    <Link href={"/about"}> About</Link>
                </li>
                <li>
                    <Link href={"/home"}> Home</Link>
                </li>
                <li>
                    <Link href={"/posts"}>Posts</Link>
                </li>
            </ul>
            </nav>

        </header>
    )
}


export default Header;
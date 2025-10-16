import Link from "next/link"
import { APP_NAME } from "@/constants/appInfo"
import Image from "next/image"

type Props={
    showSidebar:boolean
}

const Header = ({showSidebar}:Props) => {
  return (
    <>
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-40" style={showSidebar ? {opacity:0} : {opacity:1}}>
            <div className="container mx-auto flex justify-between items-center px-6 py-2">
                {/* Logo / App name */}
                <Link href="/#top" className="">
                    {/* {APP_NAME} */}
                    <Image
                     width={50}
                     height={50}
                     src="/logo.png"
                     alt="logo"
                     className="w-28 h-auto"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <Link href="/#top" className="hover:text-indigo-600 transition">
                        Home
                    </Link>
                    <Link href="/#about" className="hover:text-indigo-600 transition">
                        About
                    </Link>
                    <Link href="/#features" className="hover:text-indigo-600 transition">
                        Features
                    </Link>
                </nav>

                {/* CTA (optional) */}
                <div className="hidden md:block">
                <Link
                    href="/#cta"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Download
                </Link>
                </div>
            </div>
        </header>
         <div className="top-0 left-0 w-full opacity-0">
            <div className="container py-4">
                <p className="text-2xl ">
                    {APP_NAME}
                </p>
            </div>
        </div>
    </>
  )
}

export default Header

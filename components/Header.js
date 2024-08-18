import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  CircleStackIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-between p-2 shadow-lg">
      {/* Left - Logo */}
      <Link href="/">
        <div className="relative h-10 w-10">
          <Image src="/logo.png" alt="logo.png" layout="fill" />
        </div>
      </Link>

      {/* Middle - Search */}
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute h-4 ml-3 text-gray-400" />
        <input
          placeholder="Search"
          className="pl-8 border py-1 rounded-2xl bg-gray-200 focus:border-black focus:outline-none focus:ring-0 focus:border-2 lg:w-96"
        />
      </div>

      {/* Right - Profile */}
      <div className="flex space-x-1 h-8">
        <div className="items-center space-x-1 bg-green-100 rounded-full px-3 hidden md:inline-flex">
          <CircleStackIcon className="h-4 text-green-500" />
          <h1 className="text-green-500 text-sm">Coins : 2,000</h1>
        </div>
        <Squares2X2Icon className="text-gray-500 cursor-pointer md:hidden" />
        <HeartIcon className="text-slate-400 cursor-pointer hidden md:inline-grid" />
        <ArchiveBoxIcon className="text-gray-500" />
        <Link href="/login">
          <UserCircleIcon className="text-green-600 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

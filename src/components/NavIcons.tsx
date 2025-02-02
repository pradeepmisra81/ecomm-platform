'use client'

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;
  const rout = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      rout.push("/profile");
    }
    setIsProfileOpen((prev) => !prev);
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image src="/profile.png" alt="" width={22} height={22} className="cursor_pointer" onClick={handleProfile} />
      {isProfileOpen && <div className="">
        <Link href="/profile">profile</Link>
        <div>Logout</div>
      </div>}
      <Image src="/notification.png" alt="" width={22} height={22} className="cursor_pointer" />
      <Image src="/cart.png" alt="" width={22} height={22} className="cursor_pointer" />
    </div>
  )
}

export default NavIcons
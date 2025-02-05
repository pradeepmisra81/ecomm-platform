import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className='h-full flex items-center justify-between md:hidden'>
        {/* MOBILE */}
        <Link href="/">
          <div className='text-2xl tracking-wide'>SNDM Ayurveda</div>
        </Link>
        <Menu />
      </div>

    {/* BIGGER SCREEN */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LEFT  */}
        <div className='w-1/3'>
          <Link href="/">
            <Image 
            src="/Logo.png" 
            alt="" 
            width={28} 
            height={28}/>
          <div className='text-2xl tracking-wide'>SNDM Ayurveda</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className='w-2/3'>
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>

    </div>
  )
}

export default Navbar;
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <div className='h-full flex items-center justify-between'>
        {/* MOBILE */}
        <Link href="/">
          <div className='text-2xl tracking-wide'>LWP</div>
        </Link>
        <Menu />
      </div>

    </div>
  )
}

export default Navbar;
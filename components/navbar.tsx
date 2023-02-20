import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          href='/la-vie-du-syndicat'
          className='flex items-center hover:underline'
        >
          La vie du syndicat
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          href='/le-rucher-ecole'
          className='flex items-center hover:underline'
        >
          Le Rucher école
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link href='/actualité' className='flex items-center hover:underline'>
          Actualité
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link href='/utile' className='flex items-center hover:underline'>
          Utile
        </Link>
      </Typography>

      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <Link
          href='/petites-annonces'
          className='flex items-center hover:underline'
        >
          Petites annonces
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 font-bold tracking-tighter leading-tight'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='span'
          className='text-xl mr-4 cursor-pointer py-1.5 font-normal'
        >
          <Link
            href='/'
            className='hover:underline mr-4 cursor-pointer py-1.5 font-normal'
          >
            Home
          </Link>
        </Typography>

        <div className='hidden lg:block'>{navList}</div>

        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className='container mx-auto'>{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

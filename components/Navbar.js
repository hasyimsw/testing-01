import { useState } from 'react';
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [offcanvas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const dropdownList = [
    { text: 'Internet', href: '/posts' },
    { text: 'Books', href: '/posts' },
    { text: 'Open Source', href: '/posts' },
    ];
    return(
        <nav className='py-10'>
            <Container>
                <div className='flex items-center'>
                    <div className='w-3/12 lg:hidden'>
                        <button onClick={() => setOffcanvas(!offcanvas) }>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className='lg:w-2/12 w-6/12'>
                        <Link href="/">
                            <a className='flex items-center justify-center lg:justify-start'>
                                <div className='lg:h-10 lg:w-10 h-8 w-8 bg-gray-500 rounded flex justify-center items-center mr-3 shadow-xl'>E</div>
                                Epictetus
                            </a>
                        </Link>
                    </div>
                    <div className='w-3/12 lg:hidden text-right'>
                        <button onClick={() => setSearch(!search) }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:w-7/12 w-full fixed lg:static lg:bg-none bg-gradient-to-b from-gray-600 to-gray-900 lg:h-auto lg:p-0 top-0 h-full p-10 transition-all duration-500 ${offcanvas ? 'left-0' : '-left-full'}`}>
                        <button className='absolute top-5 right-5 lg:hidden' onClick={() => setOffcanvas(false) }>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className='flex lg:items-center lg:space-x-14 flex-col space-y-4 lg:flex-row lg:space-y-0'>
                            <li><Link href="/posts"><a className='hover:underline'>UI Design</a></Link></li>
                            <li><Link href="/posts"><a className='hover:underline'>Front-End</a></Link></li>
                            <li><Link href="/posts"><a className='hover:underline'>Back-End</a></Link></li>
                            <li className='relative'>
                            <a className='hover:underline cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>
                                Lainnya <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </a>
                            { dropdown && (
                                <ul className='absolute w-[200px] rounded shadow-lg mt-4 bg-gray-800'>
                                {dropdownList.map(({ text, href }) => (
                                    <li key={text} className="border-b border-white/5 last:border-0">
                                        <Link href={href}>
                                            <a className='py-3 px-5 flex hover:bg-gray-700/60'>
                                                {text}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                            )}
                            </li>
                        </ul>
                    </div>
                    <div className={`lg:w-3/12 absolute w-full left-0 px-8 lg:static lg:px-0 transition-all duration-500 ${search ? 'top-10' : '-top-40'}`}>
                        <button className='absolute top-2 right-9 lg:hidden' onClick={() => setSearch(false) }>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <input className="py-2 px-5 bg-gray-800 w-full lg:rounded-full rounded-xl" placeholder='Search..' />
                    </div>
                </div>
            </Container>
        </nav>
    );
}
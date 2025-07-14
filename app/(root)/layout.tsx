import Link from 'next/link'; 
import Image from "next/image";
import React, { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const RootLayout = async({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2'>
          <Image src="/logo.svg" alt="logo" height={38} width={32}/>
          <h2 className='text-primary-100'>IntViu</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout
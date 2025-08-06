import React from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { CreditProvider } from "../context/CreditContext";

const DashboardLayout = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className='h-screen '>
            <div className='md:w-64 hidden  md:block fixed'>
                <SideNav />
            </div>
            <div className='md:ml-64'>
                <CreditProvider>

                <Header/>
                {children}
                </CreditProvider>
            </div>

        </div>
    )
}

export default DashboardLayout
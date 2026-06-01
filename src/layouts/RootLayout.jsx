// import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
    return (
        <div className=''>
            <header>
                <Header />
            </header>

            <main className='max-w-360 w-full mx-auto'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;
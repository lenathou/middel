import React from 'react';
import Link from 'next/link';
import Barberlogo from '../../img/goldenlogo.svg';
import CustomButton from '../specific/CustomButton';

export default function Navbar() {
    return (
        <nav className="bg-custom-dark text-white py-4 text-lg">
            <div className='header mx-auto flex' style={{ width: '98%' }}>
                <div className='empty-space' style={{width: '30%'}}></div>
                <div className="container mx-auto flex justify-center items-center px-6" style={{ width: '45%' }}>
                    {/* Première partie de la navbar */}
                    <div className="flex space-x-4">
                        <Link href="/" passHref className="text-lg font-semibold">Accueil</Link>
                        <Link href="/services" passHref className="text-lg font-semibold">Services</Link>
                    </div>

                    {/* Icône SVG intégrée ici */}
                    <Barberlogo style={{ fill: 'white', height: '150px', width: '150px' }} />
                    {/* Seconde partie de la navbar */}
                    <div className="flex space-x-4">
                        <Link href="/gallery" passHref className="text-lg font-semibold">Galerie</Link>
                        <Link href="/about" passHref className="text-lg font-semibold">À Propos</Link>
                    </div>
                </div>

                <div className='button-container flex items-center justify-center' style={{width: '30%'}}>
                    <Link href="/reservation" passHref className='z-10'>
                        <CustomButton  >Prenez Rendez-vous</CustomButton>
                    </Link>
                </div>
            </div>
        </nav>
    );
}



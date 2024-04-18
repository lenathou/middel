"use client"
import React from 'react';
import {useIsMobile} from '../../hooks/useIsMobile'
import MobileSidebar from './MobileSidebar';
import DesktopHeader from './DesktopHeader';

export default function Header() {
    const isMobile = useIsMobile();

    return (
        <header>
            {isMobile ? <MobileSidebar /> : <DesktopHeader />}
        </header>
    );
}

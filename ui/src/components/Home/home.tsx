import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderMenu } from 'src/components';

export function Home() {
    return (
        <div className={'min-h-screen flex flex-col items-center'}>
            <HeaderMenu />
            <Outlet />
        </div>
    );
}
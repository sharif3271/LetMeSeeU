import React, { useState, useCallback } from 'react';
import Logo from 'src/assets/icons/logo.png';
import { RoutesModel } from 'src/models';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


export function HeaderMenu() {
    const { pathname } = useLocation();
    const [isShowingDrawer, setIsShowingDrawer] = useState(false);
    const closeDrawer = useCallback(() => setIsShowingDrawer(false), []);
    return (
        <div className='w-full h-[var(--app-menu-height)] bg-white shadow-light flex-center'>
            <div className='px-4 lg:px-0 w-full max-w-[var(--app-max-width)] flex items-center'>
                <img width={120} src={Logo} alt='logo' className={'mr-2 -mt-1'} />
                <div data-testid={'mobile-menu-drawer'} className={`header-menu-items-container ${isShowingDrawer ? 'show' : ''}`}>
                    <div className='hidden md:block w-0 min-h-[26px] border-0.5 border-gray5 mx-3'></div>
                    {/* <Link
                        data-cy={'header-menu-link'}
                        onClick={closeDrawer}
                        className={`header-menu-item  ${pathname.includes(RoutesModel.pastLaunches) ? 'active' : ''}`}
                        to={(RoutesModel.pastLaunches)}>Past
                    </Link>
                    <Link
                        data-cy={'header-menu-link'}
                        onClick={closeDrawer}
                        className={`header-menu-item  ${pathname.includes(RoutesModel.upLaunches) ? 'active' : ''}`}
                        to={(RoutesModel.)}>Upcoming
                    </Link> */}

                    <div className='hidden md:flex flex-1' />
                    {/* Login button is just for sample */}
                    <Link
                        onClick={closeDrawer}
                        className={`header-menu-item`}
                        to={(RoutesModel.root)}>Login
                    </Link>

                </div>
                {
                    // isShowingDrawer && <Icon name={'x'} className='fixed left-4 top-4 z-20' onClick={closeDrawer}/>
                }
                <div className='flex-1 md:hidden'></div>
                {/* <Icon className={'sm:block md:hidden'} name={'menuIcon'} onClick={() => setIsShowingDrawer(true)}/> */}
            </div>
        </div>
    );
}
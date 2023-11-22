import * as React from 'react';
import Header from '../common/header';
import { Outlet } from 'react-router-dom';

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    return (
        <div>
            <Header />
            home
            <Outlet/>
        </div>
    );
}

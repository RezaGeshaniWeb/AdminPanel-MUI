'use client'

import * as React from 'react';
import PropTypes from 'prop-types';

import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

import ToolbarActionsSearch from '../modules/LayoutToolbar';
import CustomAppTitle from '../modules/LayoutTitle';
import SidebarFooter from '../modules/LayoutSidebar';
import Dashboard from './Dashboard';
import Orders from './Orders';
import MainProfile from './MainProfile';
import Inventory from './Inventory';
import Customers from './Customers';


const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCartIcon />,
    },
    {
        kind: 'header',
        title: 'Pages',
    },
    {
        segment: 'inventory',
        title: 'Inventory',
        icon: <InventoryIcon />,
    },
    {
        segment: 'customers',
        title: 'Customers',
        icon: <DashboardCustomizeIcon />,
    },
    {
        kind: 'header',
        title: 'Profile',
    },
    {
        segment: 'profile',
        title: 'Profile',
        icon: <AccountCircleIcon />,
    },

]


const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1536,
        },
    },
})


function DemoPageContent({ pathname }) {
    const page = {
        '/dashboard': <Dashboard />,
        '/orders': <Orders />,
        '/profile': <MainProfile />,
        '/inventory': <Inventory />,
        '/customers': <Customers />,
    }
    return page[pathname] || <div>Page not found</div>
}
DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
}


export default function DashboardLayoutSlots(props) {
    const { window } = props
    const [isClient, setIsClient] = React.useState(false)
    const router = useDemoRouter('/dashboard')

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    const demoWindow = window !== undefined ? window() : undefined

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout
                slots={{
                    appTitle: CustomAppTitle,
                    toolbarActions: ToolbarActionsSearch,
                    sidebarFooter: SidebarFooter,
                }}
            >
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    )
}
DashboardLayoutSlots.propTypes = {
    window: PropTypes.func,
}
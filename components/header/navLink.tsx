'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function NavLink ({href, name}: {href: string; name: string}) {
    const path = usePathname();

    console.log(href, path)
    
    return (
        <Link href={href}>
            <Typography
                variant="h6"
                component="p"
                sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block', color: 'rgba(34, 34, 34, 0.8)', fontWeight: '400'},
                  '&:hover': {
                    color: 'rgba(153, 153, 161, 1)',
                    borderBottom: '1px solid rgba(153, 153, 161, 1)',
                    borderOpacity: 1
                  },

                  borderBottom: path === href ? '1px solid rgba(34, 34, 34, 0.8)' : 'none'
                }}
            >
                {name}
            </Typography>
        </Link>
    ); 
}
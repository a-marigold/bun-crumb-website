import Link, { type LinkProps } from 'next/link';

import linkStyles from './NavLink.module.scss';

export interface NavLinkProps extends LinkProps {
    href: string;
    isActive?: boolean;

    title: string;
    'aria-label': string;

    className?: string;
}

export default function NavLink({
    isActive = false,
    title,
    className,
    ...attributes
}: NavLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['nav-link']} ${
                isActive && linkStyles['active']
            } ${className ?? ''}`}
        >
            {title}
        </Link>
    );
}

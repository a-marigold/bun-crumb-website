import Link, { type LinkProps } from 'next/link';

import linkStyles from './NavLink.module.scss';

export interface NavLinkProps extends LinkProps {
    title: string;
    'aria-label': string;

    className?: string;
}

export default function NavLink({
    title,
    className,
    ...attributes
}: NavLinkProps) {
    return (
        <Link
            {...attributes}
            className={`${linkStyles['nav-link']} ${className ?? ''}`}
        >
            {title}
        </Link>
    );
}

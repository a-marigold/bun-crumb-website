import type { AnchorHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './AccentLink.module.scss';

//
export interface AccentLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;

    title: string;

    'aria-label': string;

    icon?: IconProps;
}

export default function AccentLink({
    href,

    title,
    className,

    icon,

    ...attributes
}: AccentLinkProps) {
    return (
        <a
            href={href}
            {...attributes}
            className={`${linkStyles['accent-link']} ${className ?? ''}`}
        >
            {icon && (
                <svg
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    color={icon.iconColor || 'var(--icon-color)'}
                >
                    <use href={icon.iconHref} />
                </svg>
            )}

            {title}
        </a>
    );
}

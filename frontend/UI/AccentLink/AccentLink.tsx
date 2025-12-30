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
    title,
    className,

    icon,

    ...attributes
}: AccentLinkProps) {
    return (
        <a
            target='_blank'
            rel='noopener norefferer'
            {...attributes}
            className={`${linkStyles['accent-link']} ${className ?? ''}`}
        >
            {title}

            {icon && (
                <svg
                    width={icon.iconWidth}
                    height={icon.iconHeight}
                    color={icon.iconColor}
                    aria-hidden='true'
                    className={linkStyles['icon']}
                >
                    <use href={icon.iconHref} />
                </svg>
            )}
        </a>
    );
}

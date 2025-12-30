import type { AnchorHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import linkStyles from './IconLink.module.scss';

export interface IconLinkPropsssss
    extends IconProps,
        AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;

    'aria-label': string;

    className?: string;
}
export default function IconLink({
    iconHref,

    iconWidth,

    iconHeight,

    iconColor,

    className,
    ...attributes
}: IconLinkPropsssss) {
    return (
        <a
            target='_blank'
            rel='noopener norefferer'
            {...attributes}
            className={`${linkStyles['icon-link']} ${className ?? ''}`}
        >
            <svg
                width={iconWidth}
                height={iconHeight}
                color={iconColor}
                aria-hidden='true'
            >
                <use href={iconHref} />
            </svg>
        </a>
    );
}

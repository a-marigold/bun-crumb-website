import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './IconButton.module.scss';

export interface IconButtonProps
    extends IconProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    'aria-label': string;
}

export default function IconButton({
    iconHref,
    iconWidth,
    iconHeight,

    iconColor = 'var(--icon-color)',

    className,

    ...attributes
}: IconButtonProps) {
    return (
        <button {...attributes} className={buttonStyles['icon-button']}>
            <svg
                width={iconWidth}
                height={iconHeight}
                color={iconColor}
                aria-hidden='true'
            >
                <use href={iconHref} />
            </svg>
        </button>
    );
}

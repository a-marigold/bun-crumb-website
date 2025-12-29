import type { ButtonHTMLAttributes } from 'react';

import buttonStyles from './IconButton.module.scss';

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconHref: `#${string}`;
    iconWidth: number;
    iconHeight: number;
    iconColor?: string;

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

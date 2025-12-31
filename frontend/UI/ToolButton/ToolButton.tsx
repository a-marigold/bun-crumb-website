import type { ButtonHTMLAttributes } from 'react';

import type { IconProps } from '@/types/IconProps';

import buttonStyles from './ToolButton.module.scss';

interface ToolButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        IconProps {
    title: string;

    'aria-label': string;
}

export default function ToolButton({
    title,
    iconHref,
    iconWidth,
    iconHeight,
    iconColor,

    className,
    ...attributes
}: ToolButtonProps) {
    return (
        <button
            {...attributes}
            className={`${buttonStyles['tool-button']} ${className ?? ''}`}
        >
            <svg width={iconWidth} height={iconHeight} color={iconColor}>
                <use href={iconHref} />
            </svg>

            {title}
        </button>
    );
}

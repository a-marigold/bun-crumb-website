import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 *
 *
 * @param {HTMLElement | null} elementRef
 * @param {number} minLeft
 * @param {number} maxLeft
 * @param {Function} onElementLeave
 */
export const useHorizontalDraggable = (
    elementRef: RefObject<HTMLElement | null>,

    minLeft?: number,
    maxLeft?: number,

    onElementLeave?: () => void
) => {
    useEffect(() => {
        if (!elementRef.current) return;

        let startLeft = 0;
        let startClientX = 0;
        let lastLeft = 0;

        const handlePointerMove = (event: MouseEvent) => {
            if (!elementRef.current) return;

            const clientX = event.clientX;

            const deltaClientX = clientX - startClientX;

            lastLeft = startLeft + deltaClientX;

            if (minLeft !== undefined && lastLeft <= minLeft) {
                onElementLeave?.();

                lastLeft = minLeft;
            }

            if (maxLeft !== undefined && lastLeft >= maxLeft) {
                onElementLeave?.();

                lastLeft = maxLeft;
            }

            elementRef.current.style.transform = `translateX(${lastLeft}px)`;
        };

        const handlePointerUp = () => {
            window.removeEventListener('pointermove', handlePointerMove);

            window.removeEventListener('pointerup', handlePointerUp);
        };

        const handlePointerDown = (event: MouseEvent) => {
            event.preventDefault();

            startLeft = lastLeft;

            startClientX = event.clientX;

            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        };

        elementRef.current.addEventListener('pointerdown', handlePointerDown);

        return () => {
            elementRef.current?.removeEventListener(
                'pointerdown',
                handlePointerDown
            );
        };
    }, []);
};

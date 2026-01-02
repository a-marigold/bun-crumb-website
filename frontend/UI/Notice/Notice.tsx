'use client';

import { useRef } from 'react';

import { useHorizontalDraggable } from '@/hooks/useDraggable';

import noticeStyles from './Notice.module.scss';

export interface NoticeProps {
    title: string;

    onClose: () => void;
}

export default function Notice({ title, onClose }: NoticeProps) {
    const noticeRef = useRef<HTMLOutputElement>(null);

    useHorizontalDraggable(noticeRef, 0, 120, undefined, onClose);

    return (
        <output ref={noticeRef} className={noticeStyles['notice']}>
            <div className={noticeStyles['text-block']}>
                <span className={noticeStyles['title']}>{title}</span>
            </div>

            <button className={noticeStyles['close-button']} onClick={onClose}>
                Close
            </button>
        </output>
    );
}

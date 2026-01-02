'use client';

// g n r

import { useEffect } from 'react';

import { useNoticeStore } from '@/store/NoticeStore';

import Notice from '@/UI/Notice';

import noticeStyles from './NoticeRoot.module.scss';

export default function NoticeRoot() {
    const currentNotice = useNoticeStore((state) => state.currentNotice);

    const currentExistenceTime = useNoticeStore(
        (state) => state.currentExistenceTime
    );
    const hideNotice = useNoticeStore((state) => state.hide);

    useEffect(() => {
        const noticeTimeout = setTimeout(hideNotice, currentExistenceTime);

        return () => {
            clearTimeout(noticeTimeout);
        };
    }, [currentNotice, currentExistenceTime]);

    return (
        <div className={noticeStyles['notice-root']}>
            {currentNotice && <Notice {...currentNotice} />}
        </div>
    );
}

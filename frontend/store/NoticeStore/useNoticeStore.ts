import { create } from 'zustand';

import { NOTICE_EXISTENCE_TIME } from '@/constants/noticeExistenceTime';

import type { NoticeProps } from '@/UI/Notice';

interface NoticeStore {
    currentNotice: NoticeProps | null;

    currentExistenceTime: typeof NOTICE_EXISTENCE_TIME | (number & {});

    show: (props: NoticeProps, existenceTime?: number) => void;

    hide: () => void;
}

export const useNoticeStore = create<NoticeStore>()((set) => ({
    currentNotice: null,

    currentExistenceTime: NOTICE_EXISTENCE_TIME,

    show: (props, existenceTime) =>
        set({
            currentNotice: props,
            currentExistenceTime: existenceTime || 3000,
        }),

    hide: () =>
        set({
            currentNotice: null,

            currentExistenceTime: NOTICE_EXISTENCE_TIME,
        }),
}));

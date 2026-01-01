import { create } from 'zustand';

import type { NoticeProps } from '@/UI/Notice';

interface NoticeStore {
    currentNotice: NoticeProps | null;

    currentExistenceTime: 3000 | (number & {});

    setCurrentNotice: (props: NoticeProps, existenceTime?: number) => void;
}

export const useNoticeStore = create<NoticeStore>()((set) => ({
    currentNotice: null,

    currentExistenceTime: 3000,

    setCurrentNotice: (props, existenceTime) =>
        set({
            currentNotice: props,
            currentExistenceTime: existenceTime || 3000,
        }),
}));

useNoticeStore.setState({ currentNotice: { title: 'hello' } });

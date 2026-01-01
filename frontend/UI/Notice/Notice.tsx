import noticeStyles from './Notice.module.scss';

export interface NoticeProps {
    title: string;

    onClose: () => void;
}
export default function Notice({ title, onClose }: NoticeProps) {
    return (
        <div className={`${noticeStyles['notice']} ${''}`}>
            <div className={noticeStyles['text-block']}>
                <span className={noticeStyles['title']}>{title}</span>
            </div>

            <button className={noticeStyles['close-button']} onClick={onClose}>
                Close
            </button>
        </div>
    );
}

// !

type a = 's' | 'b' | (string & {});
// !

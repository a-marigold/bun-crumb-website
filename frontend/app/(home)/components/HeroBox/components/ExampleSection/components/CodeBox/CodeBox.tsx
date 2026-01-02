'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

import { useNoticeStore } from '@/store/NoticeStore';

import CodeBlock from '@/UI/CodeBlock';
import ToolButton from '@/UI/ToolButton';

import codeStyles from './CodeBox.module.scss';

type CodeExample = {
    name: string;

    codeString: string;

    language: string;

    languageIcon: ReactNode;
};

const typescriptSvgSprite = (
    <svg
        role='img'
        width={27}
        height={26}
        color='var(--typescript-logo-color)'
        aria-label='TypeScript language'
    >
        <use href='#typescript-logo-icon' />
    </svg>
);

export default function CodeBox() {
    const codeExamples: CodeExample[] = [
        {
            name: 'Handle Request',

            codeString: `import { createRoute, listen } from 'bun-crumb';

createRoute({url: '/hello', method: 'GET', handler: (request, response) => {
    
    return response.send('hello world!')
}})`,

            language: 'typescript',

            languageIcon: typescriptSvgSprite,
        },

        {
            name: 'Set Headers And Status',
            codeString: `import { createRoute, listen } from 'bun-crumb';`,
            language: 'typescript',

            languageIcon: typescriptSvgSprite,
        },
    ];

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const currentCodeExample = codeExamples[currentTabIndex];

    const showNotice = useNoticeStore((state) => state.show);
    const hideNotice = useNoticeStore((state) => state.hide);

    return (
        <div className={codeStyles['code-box']}>
            <div role='tablist' className={codeStyles['tab-list']}>
                {codeExamples.map((example, index) => (
                    <button
                        key={example.name}
                        type='button'
                        role='tab'
                        className={`${codeStyles['tab']} ${
                            index === currentTabIndex
                                ? codeStyles['active']
                                : ''
                        }`}
                        onClick={() => {
                            setCurrentTabIndex(index);
                        }}
                    >
                        {example.name}
                    </button>
                ))}
            </div>

            <CodeBlock language={codeExamples[currentTabIndex].language}>
                {currentCodeExample.codeString}
            </CodeBlock>

            <div className={codeStyles['info-block']}>
                {currentCodeExample.languageIcon}

                <ToolButton
                    title='Copy'
                    iconHref='#clipboard-icon'
                    iconWidth={24}
                    iconHeight={24}
                    iconColor='var(--secondary-font-color)'
                    aria-label='Copy the code abody to clipboard'
                    onClick={() => {
                        navigator.clipboard.writeText(
                            currentCodeExample.codeString
                        );

                        showNotice({ title: 'Copied!', onClose: hideNotice });
                    }}
                />
            </div>
        </div>
    );
}

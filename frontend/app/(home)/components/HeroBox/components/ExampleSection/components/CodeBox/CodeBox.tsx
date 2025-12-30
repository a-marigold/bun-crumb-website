'use client';

import { useState } from 'react';

import CodeBlock from '@/UI/CodeBlock';

import codeStyles from './CodeBox.module.scss';

type CodeExample = { name: string; codeString: string };

export default function CodeBox() {
    const codeExamples: CodeExample[] = [
        {
            name: 'Handle Request',

            codeString: `import { createRoute , listen } from 'bun-crumb';

createRoute({url: '/hello', method: 'GET', handler: (request, response) => {
    return response.send('world!')
}})`,
        },
        {
            name: 'Set Headers And Status',
            codeString: `import { createRoute, listen } from 'bun-crumb';`,
        },
    ];

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className={codeStyles['code-box']}>
            <div role='tablist' className={codeStyles['tab-block']}>
                {codeExamples.map((example, index) => (
                    <button
                        key={example.name}
                        role='tab'
                        className={codeStyles['tab']}
                        onClick={() => {
                            setCurrentTabIndex(index);
                        }}
                    >
                        {example.name}
                    </button>
                ))}
            </div>

            <CodeBlock codeString={codeExamples[currentTabIndex].codeString} />
        </div>
    );
}

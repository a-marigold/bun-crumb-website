import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export interface CodeBlockProps {
    codeString: string;
}
export default function CodeBlock({ codeString }: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            language='javascript'
            style={anOldHope}
            showLineNumbers
            codeTagProps={{ style: { fontSize: '0.95rem' } }}
        >
            {codeString}
        </SyntaxHighlighter>
    );
}

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export interface CodeBlockProps {
    codeString: string;
}
export default function CodeBlock({ codeString }: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            language='javascript'
            style={stackoverflowDark}
            showLineNumbers
        >
            {codeString}
        </SyntaxHighlighter>
    );
}

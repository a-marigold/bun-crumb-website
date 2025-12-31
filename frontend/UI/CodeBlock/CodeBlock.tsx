import SyntaxHighlighter, {
    type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export type CodeBlockProps = SyntaxHighlighterProps;
export default function CodeBlock({ children, ...props }: CodeBlockProps) {
    return (
        <SyntaxHighlighter
            style={anOldHope}
            showLineNumbers
            codeTagProps={{ style: { fontSize: '12px' } }}
            {...props}
        >
            {children}
        </SyntaxHighlighter>
    );
}

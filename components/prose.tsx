import { cn } from 'lib/utils';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={cn(
        'prose mx-auto max-w-6xl prose-headings:mt-8 prose-headings:border-t prose-headings:border-gray-200 prose-headings:pt-8 prose-headings:text-sm prose-headings:font-medium prose-headings:text-gray-900',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;

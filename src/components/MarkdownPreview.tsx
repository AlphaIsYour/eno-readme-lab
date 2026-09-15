import React, { useEffect, useState } from 'react';

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  const [wordCount, setWordCount] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [readTimeMinutes, setReadTimeMinutes] = useState<number>(0);

  useEffect(() => {
    const wordCount = markdown.trim() ? markdown.trim().split(/\s+/).length : 0;
    const charCount = markdown.length;
    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
    setWordCount(wordCount);
    setCharCount(charCount);
    setReadTimeMinutes(readTimeMinutes);
  }, [markdown]);

  return (
    <div className="markdown-preview">
      <div className="metadata">
        {wordCount > 0 && <span>{`${wordCount} words`}</span>}
        {charCount > 0 && <span>{`${charCount} chars`}</span>}
        {readTimeMinutes > 0 && <span>{`${readTimeMinutes} min read`}</span>}
      </div>
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default MarkdownPreview;
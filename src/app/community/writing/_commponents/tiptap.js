import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import Bold from './bold'; // 위의 확장 파일 경로에 따라 수정

const EditorPage = () => {
    const editor = useEditor({
        extensions: [StarterKit, Bold], // Bold 확장 추가
        autofocus: true,
        onUpdate: ({ editor }) => {
          // 여기에서 글쓴 내용을 저장하거나 처리합니다.
        },
    });

  const [content, setContent] = useState('');

  useEffect(() => {
    if (editor) {
      setContent(editor.getHTML());
    }
  }, [editor]);

  return (
    <div>
      <h1>Tiptap Editor Example</h1>
      <div>
        {editor && <EditorContent editor={editor} />}
      </div>
      <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default EditorPage;
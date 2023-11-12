import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const MyEditor = () => {
  const editorRef = useRef();

  return (
    <Editor
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={editorRef}
    />
  );
};

export default MyEditor;
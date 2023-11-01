import { Extension } from '@tiptap/core';

export default Extension.create({
  name: 'bold',

  addGlobalAttributes() {
    return [
      {
        types: 'mark',
        attributes: {
          bold: {
            default: false,
            renderHTML: attributes => {
              if (attributes.bold) {
                return ['strong'];
              }
              return ['span'];
            },
            parseHTML: element => {
              if (element.tagName.toLowerCase() === 'strong') {
                return { bold: true };
              }
              return { bold: false };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      toggleBold: () => ({ commands }) => {
        return commands.toggleMark('bold');
      },
    };
  },
});

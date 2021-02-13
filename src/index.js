let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document
        .createElement("style")
        .appendChild(
          document.createTextNode(
            `@import url("https://raw.githack.com/Conjuringil/Splendid/main/main.css")`
          )
        );
      document.head.appendChild(style);
    },

    onRemove: async () => {
      style.remove();
    },
  },
};

import { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Graphics" },
    { id: "4", title: "Building design" },
  ],
};

const container = document.getElementById("root");
const reactDomRoot = createRoot(container);

function render() {
  const children = listData.items.map(({ id, title }) => {
    const reactElement = h(
      "li",
      {
        key: id,
        className: "item",
      },
      h("img", {
        src: `/architectures/architecture-${id}.jpg`,
        alt: "",
      }),
      h(
        "span",
        {
          className: "content",
        },
        title
      ),
      h(
        "button",
        {
          type: "button",
          title: "아이템 이동 (위/아래 화살표 키 활용)",
        },
        h("img", {
          src: "/icons/handle.svg",
          alt: "아이템 이동 (위/아래 화살표 키 활용)",
        })
      )
    );

    return reactElement;
  });

  const list = h(
    "ul",
    { className: "architectures", lang: "en" },

    children
  );

  reactDomRoot.render(list);
}

function unmount() {
  reactDomRoot.unmount();
}

render();

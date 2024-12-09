window.addEventListener("load", () => htmlSelector());

const htmlSelector = () => {
  // detect
  if (document.querySelector("#domHtmlSelector")) {
    return;
  }

  // render rounded button
  const selectorEl = document.createElement("div");
  selectorEl.innerHTML = `<svg style="width: 30px; height: 30px;" t="1733379192246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4215" width="200" height="200"><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" fill="#ffffff" p-id="4216"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" fill="#ffffff" p-id="4217"></path></svg>`;
  selectorEl.id = "domHtmlSelector";
  Object.assign(selectorEl.style, {
    width: "60px",
    height: "60px",
    position: "fixed",
    bottom: "60px",
    right: "60px",
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    color: "white",
    borderRadius: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: "2147483646",
  });

  // mount
  document.body.appendChild(selectorEl);

  selectorEl.addEventListener("click", () => {
    const frameEl = document.createElement("div");
    Object.assign(frameEl.style, {
      zIndex: "2147483646",
      position: "fixed",
      // backgroundColor: "#42b88325",
      // border: "1px solid #42b88350",
      backgroundColor: "#ff000050",
      borderRadius: "5px",
      pointerEvents: "none",
      transition: "all 0.1s ease-in",
    });
    const mousemoveHandler = (e) => {
      const targetNode = e.target;
      if (targetNode) {
        const rect = targetNode.getBoundingClientRect();
        Object.assign(frameEl.style, {
          left: `${rect.x}px`,
          top: `${rect.y}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        });
      } else {
        resizeHandler();
      }
    };
    const clickHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      resizeHandler();
      const rawHtml = getFragmentInfo(e.target);
      const rawSfc = await callDashScope(rawHtml);
      console.log(rawSfc);
    };
    const resizeHandler = () => {
      selectorEl.style.display = "flex";
      document.body.removeChild(frameEl);
      document.body.removeEventListener("mousemove", mousemoveHandler);
      document.body.removeEventListener("click", clickHandler, true);
      document.body.removeEventListener("resize", resizeHandler, true);
    };
    document.body.addEventListener("mousemove", mousemoveHandler);
    document.body.addEventListener("resize", resizeHandler, true);
    document.body.addEventListener("click", clickHandler, true);
    document.body.appendChild(frameEl);
    selectorEl.style.display = "none";
  });
};

const getFragmentInfo = (target) => {
  // clone 的节点没有样式信息，注意这个坑
  // const clonedTarget = target.cloneNode(true);
  traverseDom(target, (node) => {
    // 遇到 svg 元素就跳过
    if (node.parentElement?.tagName === "svg") {
      return true;
    }
    const style = getModifiedStyles(node);
    node.dataset.computedStyle = JSON.stringify(style);
  });
  const clonedTarget = target.cloneNode(true);
  traverseDom(clonedTarget, (node) => {
    // 遇到 svg 元素就跳过
    if (node.parentElement?.tagName === "svg") {
      return true;
    }
    // 移除无用的 vue scope style 属性
    Object.assign(node.style, JSON.parse(node.dataset.computedStyle || "{}"));
    Object.keys(node.dataset).forEach((key) => {
      delete node.dataset[key];
    });
  });
  return clonedTarget.outerHTML;
};

// const styleObjToStr = (styleObj) => {
//   const str = "";
//   Object.keys(styleObj).forEach((key) => {
//     str += `${key}: ${styleObj[key]};`;
//   });
//   return str;
// };

const getModifiedStyles = (element) => {
  // 获取目标元素的计算样式
  const computedStyle = getComputedStyle(element);

  // 保存经过修改的样式
  const modifiedStyles = {};

  Object.keys(defaultRules).forEach((key) => {
    // 跟默认值不同时，才加入，否则排除
    if (computedStyle[key] !== defaultRules[key]) {
      modifiedStyles[key] = computedStyle[key];
    }
  });

  // 添加固定的样式规则
  Object.assign(modifiedStyles, {
    width: computedStyle.width,
    height: computedStyle.height,
    display: computedStyle.display,
  });

  return modifiedStyles;
};

const traverseDom = (node, callback) => {
  // 执行回调函数
  const flag = callback(node);
  if (flag) {
    return;
  }

  // 遍历子节点
  const children = node.children; // 仅获取元素子节点（跳过文本和注释节点）
  for (let i = 0; i < children.length; i++) {
    traverseDom(children[i], callback); // 递归调用
  }
};

const defaultRules = {
  "align-content": "normal",
  "align-items": "normal",
  "align-self": "auto",
  "aspect-ratio": "auto",
  background:
    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
  "background-color": "rgba(0, 0, 0, 0)",
  "background-image": "none",
  "background-origin": "padding-box",
  "background-position": "0% 0%",
  "background-position-x": "0%",
  "background-position-y": "0%",
  "background-repeat": "repeat",
  "background-size": "auto",
  border: "0px none rgb(0, 0, 0)",
  "border-bottom": "0px none rgb(0, 0, 0)",
  "border-bottom-color": "rgb(0, 0, 0)",
  "border-bottom-left-radius": "0px",
  "border-bottom-right-radius": "0px",
  "border-bottom-style": "none",
  "border-bottom-width": "0px",
  "border-color": "rgb(0, 0, 0)",
  "border-left": "0px none rgb(0, 0, 0)",
  "border-left-color": "rgb(0, 0, 0)",
  "border-left-style": "none",
  "border-left-width": "0px",
  "border-radius": "0px",
  "border-right": "0px none rgb(0, 0, 0)",
  "border-right-color": "rgb(0, 0, 0)",
  "border-right-style": "none",
  "border-right-width": "0px",
  "border-style": "none",
  "border-top": "0px none rgb(0, 0, 0)",
  "border-top-color": "rgb(0, 0, 0)",
  "border-top-left-radius": "0px",
  "border-top-right-radius": "0px",
  "border-top-style": "none",
  "border-top-width": "0px",
  "border-width": "0px",
  bottom: "auto",
  "box-shadow": "none",
  clear: "none",
  color: "rgb(0, 0, 0)",
  "column-count": "auto",
  "column-fill": "balance",
  "column-gap": "normal",
  "column-rule": "0px none rgb(0, 0, 0)",
  "column-rule-color": "rgb(0, 0, 0)",
  "column-rule-style": "none",
  "column-rule-width": "0px",
  "column-span": "none",
  "column-width": "auto",
  columns: "auto auto",
  content: "normal",
  "content-visibility": "visible",
  cursor: "auto",
  fill: "rgb(0, 0, 0)",
  "fill-opacity": "1",
  filter: "none",
  flex: "0 1 auto",
  "flex-basis": "auto",
  "flex-direction": "row",
  "flex-flow": "row nowrap",
  "flex-grow": "0",
  "flex-shrink": "1",
  "flex-wrap": "nowrap",
  float: "none",
  "font-size": "16px",
  "font-style": "normal",
  "font-weight": "400",
  gap: "normal",
  grid: "none / none / none / row / auto / auto",
  "grid-gap": "normal",
  "grid-row": "auto",
  "grid-row-end": "auto",
  "grid-row-gap": "normal",
  "grid-row-start": "auto",
  "justify-content": "normal",
  "justify-items": "normal",
  "justify-self": "auto",
  left: "auto",
  "letter-spacing": "normal",
  "line-break": "auto",
  "line-height": "normal",
  "list-style": "outside none disc",
  margin: "0px",
  "margin-bottom": "0px",
  "margin-left": "0px",
  "margin-right": "0px",
  "margin-top": "0px",
  "max-height": "none",
  "max-width": "none",
  "min-height": "0px",
  "min-width": "0px",
  offset: "none 0px auto 0deg",
  opacity: "1",
  order: "0",
  overflow: "visible",
  "overflow-x": "visible",
  "overflow-y": "visible",
  padding: "0px",
  "padding-bottom": "0px",
  "padding-left": "0px",
  "padding-right": "0px",
  "padding-top": "0px",
  "pointer-events": "auto",
  position: "static",
  resize: "none",
  right: "auto",
  rotate: "none",
  "text-align": "start",
  "text-decoration": "none solid rgb(0, 0, 0)",
  "text-indent": "0px",
  "text-overflow": "clip",
  "text-shadow": "none",
  "text-wrap": "wrap",
  top: "auto",
  transform: "none",
  transition: "all",
  "transition-behavior": "normal",
  "transition-delay": "0s",
  "transition-duration": "0s",
  "transition-property": "all",
  "transition-timing-function": "ease",
  translate: "none",
  "user-select": "auto",
  "vertical-align": "baseline",
  visibility: "visible",
  "white-space": "normal",
  "word-break": "normal",
  "word-spacing": "0px",
  "word-wrap": "normal",
  x: "0px",
  y: "0px",
  "z-index": "auto",
  zoom: "1",
};

const callDashScope = async (rawHtml) => {
  const url = "http://localhost:3000/ali-bailian/html2sfc";
  const res = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: rawHtml }),
  }).then((res) => res.text());
  return res;
};

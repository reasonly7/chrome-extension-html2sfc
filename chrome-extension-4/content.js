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
    const clickHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      resizeHandler();
      console.log(getFragmentInfo(e.target));
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
  const clonedTarget = target.cloneNode(true);
  traverseDom(clonedTarget, (node) => {
    const style = getModifiedStyles(target);
    Object.assign(node.style, style);
  });

  return clonedTarget.outerHTML;
};

function getModifiedStyles(element) {
  // 获取目标元素的计算样式
  const computedStyle = getComputedStyle(element);

  // 创建一个相同标签的临时元素
  const tempElement =
    cacheElementMap[element.tagName] || document.createElement(element.tagName);
  document.body.appendChild(tempElement);

  // 获取临时元素的默认计算样式
  const defaultStyle = getComputedStyle(tempElement);

  // 保存经过修改的样式
  const modifiedStyles = {};

  // 比较两者的样式
  for (const key of computedStyle) {
    if (computedStyle[key] !== defaultStyle[key]) {
      modifiedStyles[key] = computedStyle[key];
    }
  }

  if (!cacheElementMap[element.tagName]) {
    cacheElementMap[element.tagName] = tempElement;
  }
  // 移除临时元素
  document.body.removeChild(tempElement);

  return modifiedStyles;
}

const traverseDom = (node, callback) => {
  // 执行回调函数
  callback(node);

  // 遇到 svg 元素就跳过
  if (node.tagName === "SVG") {
    return;
  }

  // 遍历子节点
  const children = node.children; // 仅获取元素子节点（跳过文本和注释节点）
  for (let i = 0; i < children.length; i++) {
    traverseDom(children[i], callback); // 递归调用
  }
};

const cacheElementMap = {};

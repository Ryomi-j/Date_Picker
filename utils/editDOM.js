export const makeDOM = (domName, attributeList) => {
  const dom = document.createElement(domName);
  Object.keys(attributeList).map((key) => {
    dom[key] = attributeList[key];
  });
  return dom;
};

export const appendChildrenList = (parentDOM, childrenDOM) => {
  if (!Array.isArray(childrenDOM)) return;

  childrenDOM.forEach((childDOM) => parentDOM.appendChild(childDOM));
};

export const getDOM = (target) => document.querySelector(target);

export const getAllDOM = (target) => document.querySelectorAll(target);
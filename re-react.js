function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === "object" ? child : createTextElement(child)),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
const ReReact = {
  createElement,
}

/** @jsx ReReact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

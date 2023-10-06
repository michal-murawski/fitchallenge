var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var index_web_exports = {};
__export(index_web_exports, {
  VirtualList: () => VirtualList
});
module.exports = __toCommonJS(index_web_exports);
var import_react_native_safe_area_context = require("react-native-safe-area-context"), import_react_virtual = require("@tanstack/react-virtual"), import_react = require("react"), import_jsx_runtime = require("react/jsx-runtime");
const VirtualList = ({ data, renderItem, itemHeight }) => {
  const { top, bottom } = (0, import_react_native_safe_area_context.useSafeAreaInsets)(), parentRef = (0, import_react.useRef)(), rowVirtualizer = (0, import_react_virtual.useVirtualizer)({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: parentRef,
      style: {
        paddingTop: top,
        paddingBottom: bottom,
        height: "100%",
        overflow: "auto"
        // Make it scroll!
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative"
          },
          children: rowVirtualizer.getVirtualItems().map((virtualItem) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`
              },
              children: renderItem(data[virtualItem.index])
            },
            virtualItem.key
          ))
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VirtualList
});
//# sourceMappingURL=index.web.js.map

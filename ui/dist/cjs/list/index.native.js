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
var list_exports = {};
__export(list_exports, {
  VirtualList: () => VirtualList
});
module.exports = __toCommonJS(list_exports);
var import_flash_list = require("@shopify/flash-list"), import_react_native_safe_area_context = require("react-native-safe-area-context"), import_react = require("react"), import_jsx_runtime = require("react/jsx-runtime");
function VirtualList({ data, renderItem, itemHeight }) {
  const { top, bottom } = (0, import_react_native_safe_area_context.useSafeAreaInsets)(), render = (0, import_react.useCallback)(
    (item) => renderItem(item.item),
    [renderItem]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_flash_list.FlashList,
    {
      data,
      contentContainerStyle: {
        paddingTop: top,
        paddingBottom: bottom
      },
      renderItem: render,
      estimatedItemSize: itemHeight
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VirtualList
});
//# sourceMappingURL=index.js.map

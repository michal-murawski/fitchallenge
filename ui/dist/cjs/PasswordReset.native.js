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
var PasswordReset_exports = {};
__export(PasswordReset_exports, {
  PasswordResetComponent: () => PasswordResetComponent
});
module.exports = __toCommonJS(PasswordReset_exports);
var import_react = require("react"), import_tamagui = require("tamagui"), import_jsx_runtime = require("react/jsx-runtime");
const PasswordResetComponent = ({ type, handleWithPress }) => {
  const [emailOrPassword, setEmailOrPassword] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_tamagui.YStack,
    {
      borderRadius: "$10",
      space: !0,
      paddingHorizontal: "$7",
      paddingVertical: "$6",
      width: 350,
      shadowColor: "#00000020",
      shadowRadius: 26,
      shadowOffset: { width: 0, height: 4 },
      backgroundColor: "$background",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { size: "$5", fontWeight: "700", opacity: 0.8, marginBottom: "$1", children: type == "email" ? "Reset your password" : "Change your password" }),
        type === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            autoCapitalize: "none",
            placeholder: "Email",
            onChangeText: (text) => {
              setEmailOrPassword(text);
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            autoCapitalize: "none",
            placeholder: "New Password",
            onChangeText: (text) => {
              setEmailOrPassword(text);
            },
            textContentType: "password",
            secureTextEntry: !0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Button,
          {
            themeInverse: !0,
            onPress: () => {
              handleWithPress(emailOrPassword);
            },
            hoverStyle: { opacity: 0.8 },
            onHoverIn: () => {
            },
            onHoverOut: () => {
            },
            focusStyle: { scale: 0.975 },
            children: type == "email" ? "Reset Password" : "Change Password"
          }
        )
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PasswordResetComponent
});
//# sourceMappingURL=PasswordReset.js.map

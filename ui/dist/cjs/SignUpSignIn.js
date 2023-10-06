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
var SignUpSignIn_exports = {};
__export(SignUpSignIn_exports, {
  SignUpSignInComponent: () => SignUpSignInComponent
});
module.exports = __toCommonJS(SignUpSignIn_exports);
var import_react = require("react"), import_tamagui = require("tamagui"), import_link = require("solito/link"), import_image = require("solito/image"), import_jsx_runtime = require("react/jsx-runtime");
const SignUpSignInComponent = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress
}) => {
  const [email, setEmail] = (0, import_react.useState)(""), [password, setPassword] = (0, import_react.useState)("");
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { size: "$5", fontWeight: "700", opacity: 0.8, marginBottom: "$1", children: type === "sign-up" ? "Create your account" : "Sign in to your account" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { space: !0, justifyContent: "space-evenly", theme: "light", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Button,
            {
              size: "$5",
              onPress: () => handleOAuthWithPress("google"),
              hoverStyle: { opacity: 0.8 },
              focusStyle: { scale: 0.95 },
              borderColor: "$gray8Light",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_image.SolitoImage,
                {
                  style: { width: 20, height: 20 },
                  src: "/auth/google-logo.png",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alt: "Google Logo"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Button,
            {
              size: "$5",
              onPress: () => handleOAuthWithPress("apple"),
              hoverStyle: { opacity: 0.8 },
              focusStyle: { scale: 0.95 },
              borderColor: "$gray8Light",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_image.SolitoImage,
                {
                  style: { width: 22, height: 22 },
                  src: "/auth/apple-logo.png",
                  width: 22,
                  height: 22,
                  resizeMode: "contain",
                  alt: "Apple Logo"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Button,
            {
              size: "$5",
              onPress: () => handleOAuthWithPress("discord"),
              hoverStyle: { opacity: 0.8 },
              focusStyle: { scale: 0.95 },
              borderColor: "$gray8Light",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_image.SolitoImage,
                {
                  style: { width: 25, height: 22 },
                  src: "/auth/discord-logo.png",
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  alt: "Discord Logo"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { alignItems: "center", width: "100%", justifyContent: "space-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Stack, { height: "$0.25", backgroundColor: "black", width: "$10", opacity: 0.1 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { size: "$3", opacity: 0.5, children: "or" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Stack, { height: "$0.25", backgroundColor: "black", width: "$10", opacity: 0.1 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            autoCapitalize: "none",
            placeholder: "Email",
            onChangeText: (text) => {
              setEmail(text);
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_tamagui.Input,
          {
            autoCapitalize: "none",
            placeholder: "Password",
            onChangeText: (text) => {
              setPassword(text);
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
              handleEmailWithPress(email, password);
            },
            hoverStyle: { opacity: 0.8 },
            onHoverIn: () => {
            },
            onHoverOut: () => {
            },
            focusStyle: { scale: 0.975 },
            children: type === "sign-up" ? "Sign up" : "Sign in"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { size: "$2", marginRight: "$2", opacity: 0.4, children: type === "sign-up" ? "Already have an account?" : "Don\u2019t have an account?" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.Link, { href: type === "sign-up" ? "/sign-in" : "/sign-up", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Paragraph,
            {
              cursor: "pointer",
              size: "$2",
              fontWeight: "700",
              opacity: 0.5,
              hoverStyle: { opacity: 0.4 },
              children: type === "sign-up" ? "Sign in" : "Sign up"
            }
          ) })
        ] }),
        type === "sign-in" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_tamagui.XStack, { marginTop: "$-2.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tamagui.Paragraph, { size: "$2", marginRight: "$2", opacity: 0.4, children: "Forgot your password?" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.Link, { href: "/password-reset", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_tamagui.Paragraph,
            {
              cursor: "pointer",
              size: "$2",
              fontWeight: "700",
              opacity: 0.5,
              hoverStyle: { opacity: 0.4 },
              children: "Reset it"
            }
          ) })
        ] })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SignUpSignInComponent
});
//# sourceMappingURL=SignUpSignIn.js.map

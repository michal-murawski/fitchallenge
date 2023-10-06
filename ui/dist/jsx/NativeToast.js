import { Toast, useToastState } from "@tamagui/toast";
import { YStack } from "tamagui";
const NativeToast = () => {
  const currentToast = useToastState();
  return !currentToast || currentToast.isHandledNatively ? null : <Toast
    key={currentToast.id}
    duration={currentToast.duration}
    viewportName={currentToast.viewportName}
    enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
    exitStyle={{ opacity: 0, scale: 1, y: -20 }}
    y={0}
    opacity={1}
    scale={1}
    animation="quick"
  ><YStack>
    <Toast.Title>{currentToast.title}</Toast.Title>
    {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
  </YStack></Toast>;
};
export {
  NativeToast
};
//# sourceMappingURL=NativeToast.js.map

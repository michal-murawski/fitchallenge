import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback } from "react";
function VirtualList({ data, renderItem, itemHeight }) {
  const { top, bottom } = useSafeAreaInsets(), render = useCallback(
    (item) => renderItem(item.item),
    [renderItem]
  );
  return <FlashList
    data={data}
    contentContainerStyle={{
      paddingTop: top,
      paddingBottom: bottom
    }}
    renderItem={render}
    estimatedItemSize={itemHeight}
  />;
}
export {
  VirtualList
};
//# sourceMappingURL=index.js.map

export type RootStackParamList = {
  Home: undefined;
};

declare global {
  // ทำให้ useNavigation() รู้จัก type ของทุก route โดยไม่ต้อง generic เอง
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}

// types/global.d.ts
export interface WidgetConfig {
  id?: number;
  name?: string;
}

declare global {
  interface Window {
    MyWidgetConfig?: WidgetConfig;
  }
}

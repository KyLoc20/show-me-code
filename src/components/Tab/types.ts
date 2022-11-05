export interface TabItem {
  key: string;
}

export interface MyTabProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (tabKeyName: string) => void; // navigate to link when clicking one tab
}

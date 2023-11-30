import { LayoutDashboardIcon, FileInputIcon, FileSearchIcon, FileCheck2Icon, FileX2Icon } from 'lucide-react';
import type { TabTriggerDashboardProps } from 'src/component/organisms/tab-trigger/dashboard';

export namespace Constant {
  export const triggerValues: TabTriggerDashboardProps['values'] = [
    {
      label: "Dashboard",
      value: "dashboard",
      Icon: LayoutDashboardIcon,
    },
    {
      label: "Laporan Masuk",
      value: "masuk",
      Icon: FileInputIcon,
    },
    {
      label: "Laporan Diproses",
      value: "proses",
      Icon: FileSearchIcon
    },
    {
      label: "Laporan Selesai",
      value: "selesai",
      Icon: FileCheck2Icon
    },
    {
      label: "Laporan Ditolak",
      value: "tolak",
      Icon: FileX2Icon
    },
  ]
}
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

export const sidebarData = {
  navMain: [
    {
      title: "Dashboard",
      icon: IconDashboard,
      url: "#",
    },
    {
      title: "Ventas",
      icon: IconChartBar,
      url: "#",
    },
    {
      title: "Inventario",
      icon: IconDatabase,
      url: "#",
    },
    {
      title: "Clientes",
      icon: IconUsers,
      url: "#",
    },
    {
      title: "Proveedores",
      icon: IconFolder,
      url: "#",
    },
  ],
  documents: [
    {
      name: "Reportes",
      icon: IconReport,
      url: "#",
    },
    {
      name: "Documentación BI",
      icon: IconFileDescription,
      url: "#",
    },
  ],
  navSecondary: [
    {
      title: "Configuración",
      icon: IconSettings,
      url: "#",
    },
    {
      title: "Ayuda",
      icon: IconHelp,
      url: "#",
    },
  ],
  user: {
    name: "Fabricio",
    email: "fabricio@example.com",
    avatar: "https://i.pravatar.cc/100",
  },
}

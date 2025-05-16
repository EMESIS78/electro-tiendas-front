import {
    IconTrendingUp,
    IconTrendingDown,
    IconBuildingStore,
    IconCash,
    IconGauge,
    IconTruck,
} from "@tabler/icons-react"

export interface CardInfo {
    title: string
    value: string
    trend: string
    trendIcon: React.ElementType
    description: string
    subtext: string
}

export const cardsData: CardInfo[] = [
    {
        title: "Sucursales activas",
        value: "12",
        trend: "+1 nueva",
        trendIcon: IconTrendingUp,
        description: "Expansión mensual positiva",
        subtext: "Últimos 6 meses",
    },
    {
        title: "Ganancias (Año)",
        value: "S/. 1,200,000",
        trend: "+15%",
        trendIcon: IconTrendingUp,
        description: "Mayor ticket promedio",
        subtext: "Comparado al año pasado",
    },
    {
        title: "Productividad",
        value: "87%",
        trend: "-3%",
        trendIcon: IconTrendingDown,
        description: "Ligera baja operativa",
        subtext: "Semana actual",
    },
    {
        title: "Proveedores activos",
        value: "38",
        trend: "+4",
        trendIcon: IconTrendingUp,
        description: "Relaciones consolidadas",
        subtext: "Último trimestre",
    },
]

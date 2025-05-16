export interface SalesDataPoint {
    date: string
    desktop: number
    mobile: number
    total: number
    branch: string
}

const branches = ["Lima", "Arequipa", "Cusco", "Trujillo"]

function generateFakeSalesData(): SalesDataPoint[] {
    const data: SalesDataPoint[] = []
    const now = new Date("2024-06-30")

    for (let i = 0; i < 90; i++) {
        const date = new Date(now)
        date.setDate(now.getDate() - i)

        for (const branch of branches) {
            const desktop = Math.floor(Math.random() * 400 + 200)
            const mobile = Math.floor(Math.random() * 300 + 100)
            data.push({
                date: date.toISOString().split("T")[0],
                desktop,
                mobile,
                total: desktop + mobile,
                branch,
            })
        }
    }

    return data.reverse()
}

export const salesChartData = generateFakeSalesData()
export const salesBranches = branches
export const dailySalesTarget = 800 // línea meta


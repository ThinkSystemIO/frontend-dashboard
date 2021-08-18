export interface App {
    id: string
    name: string
}

export const getApps = async (delay: number): Promise<App[]> => {
    return new Promise<App[]>((res) =>
        setTimeout(() => res([
            { id: "1", name: "flow" },
            { id: "2", name: "task" },
        ]), delay))
}

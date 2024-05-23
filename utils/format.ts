export const dateFormat = (timestamp: number) : string => {
    let date = new Date(Number(timestamp))
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate
}
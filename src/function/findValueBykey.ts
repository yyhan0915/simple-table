export function findValueByKey(value: string, obj: { [name: string]: string }): string {
    const key = Object.keys(obj).find(key => key === value) as string;
    return obj[key];
}

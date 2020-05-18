export function imparesHasta (n:number): number{
    let i:number;
    for (i = 1; i < n; i += 2){
        return i;
    }
}
export function reverse(arr){
    return arr.reverse()
}
export function numCaracterArr(arr :string[]): number{
    let num:number = 0
    arr.forEach(char => {
        num += char.length
    })
    return num
}
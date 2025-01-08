
export class MathUtils {
    public static addComma(value:number):string{
        const strValue = value.toString();
       return strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
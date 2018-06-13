export class HelperFunctions {
    static isNullOrEmpty(data: string)
    {
        return data == null || data == "" || !data || undefined || data.length == 0;
    }
}

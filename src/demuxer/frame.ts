export default class Frame {
    public static IDR_FRAME: string = 'I';
    public static P_FRAME: string = 'P';
    public static B_FRAME: string = 'B';

    constructor (public frameType: string, public timeUs: number) {
        // do nothing
    }
}

import {IClassRoom} from "./IClassRoom";
import {RaspTypeMnemonic} from "./RaspTypeMnemonic";

export interface IRasp {
    type: RaspTypeMnemonic | undefined;
    pairNumber: number | undefined;
    subject: String | undefined;
    classRoom: IClassRoom | undefined;
}
import HikeLocation from "../enums/HikeLocationEnum";


interface IHike{
    TrailName: string;
    Description: string;
    Location: string;
    LocationGroup: HikeLocation;
    Difficulty: number;
    Images: string[];
}

export default IHike;
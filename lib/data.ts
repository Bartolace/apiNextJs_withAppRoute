type Dado = {
    id: number;
    title: string;
    desc: string;
    date: Date;
};
let posts: Dado[] = [
    {   
        "id": 1,
        "title": "postTest",
        "desc":"testando next api",
        "date": new Date()
    }
];

//handlers
export const getData = () => posts;
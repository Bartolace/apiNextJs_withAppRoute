type Dado = {
    id: string;
    title: string;
    desc: string;
    date: Date;
};


let posts: Dado[] = [
    {   
        "id": '0',
        "title": "postTest",
        "desc":"testando next api",
        "date": new Date()
    }
];

//handlers
export const getData = () => posts;

export const addPost = (dado:Dado) => {
    posts.push(dado);
};

export const deletePost = (id:string) => {
    posts = posts.filter((p) => p.id !== id);
    return posts;
}

export const updatePost = (id:string, title:string, desc:string) => {
    const post = posts.find((p) => p.id === id);

    if(post){
        post.title = title;
        post.desc = desc;

        return post;
    } else throw new Error("NOT FOUND TO UPDATE");
}



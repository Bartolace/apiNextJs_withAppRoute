import { addPost, deletePost, getData, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"


export async function GET(request: Request, response: NextResponse) {
  try {
    const data = getData();
    return NextResponse.json({message:"OK", data}, {status:200});
  } catch (err){
    return NextResponse.json({ sucess: 'Error', err }, { status: 500 })
  }
  
}

export async function POST(req: Request, res: Response) {
  const { title, desc } = await req.json();
  try {
    const post = { id: Date.now().toString() , title, desc,  date: new Date() } 
    addPost(post);
    return NextResponse.json({message:"OK", post }, {status:201});
  } catch (err){
    return NextResponse.json({ sucess: 'Error', err }, { status: 500 })
  }
}
 
export async function PUT(req: Request, res: Response) {
  const {id,title,desc} = await req.json();

  try {
    let dado = updatePost(id,title,desc);

    return NextResponse.json({status:"Atualizado", dado}, {status:200});
  } catch (err){
    return NextResponse.json({ sucess: 'Error', err }, { status: 500 })
  }  
}
 

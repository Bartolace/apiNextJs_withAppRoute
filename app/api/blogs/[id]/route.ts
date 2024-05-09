import { deletePost } from "@/lib/data";
import { NextResponse } from "next/server"

export async function GET(request: Request, response: NextResponse) {
  console.log("GET BY ID")
  return NextResponse.json({ sucess: 'SLUG' }, { status: 200 })
  
}

export async function DELETE(req: Request, res: Response) {
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({message:"Excluído", id_excluido: id}, {status:200});
  } catch (err){
    return NextResponse.json({ sucess: 'Error', err }, { status: 500 })
  }  
}

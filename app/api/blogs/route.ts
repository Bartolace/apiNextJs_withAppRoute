import { getData } from "@/lib/data"
import { NextResponse } from "next/server"


export async function GET(request: Request, response: NextResponse) {
  try {
    const data = getData();
    return NextResponse.json({message:"OK", data}, {status:200});
  } catch (err){
    return NextResponse.json({ sucess: 'Error', err }, { status: 500 })
  }
  
}

export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
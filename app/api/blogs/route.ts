import { NextResponse } from "next/server"


export async function GET(request: Request, response: NextResponse) {
  console.log("GET RESQUEST")
  return NextResponse.json({ sucess: 'foi bobo' }, { status: 200 })
  
}

export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
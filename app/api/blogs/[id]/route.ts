import { NextResponse } from "next/server"

export async function GET(request: Request, response: NextResponse) {
  console.log("GET BY ID")
  return NextResponse.json({ sucess: 'SLUG' }, { status: 200 })
  
}

export async function PUT(request: Request, response: NextResponse) {
  console.log("PUT")
  return NextResponse.json({ sucess: 'SLUG' }, { status: 200 })
  
}

export async function DELETE(request: Request, response: NextResponse) {
  console.log("DELETE BY ID")
  return NextResponse.json({ sucess: 'SLUG' }, { status: 200 })
  
}

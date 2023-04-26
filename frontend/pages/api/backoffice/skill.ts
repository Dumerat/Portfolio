import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/posts/1"

export async function getData() {
    const res = await fetch(DATA_SOURCE_URL)

    const skill: Skill[] = await res.json()

    return NextResponse.json(skill)
}

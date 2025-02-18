import { NextResponse } from "next/server";
import { openai } from "@/app/openai";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    // 요청에서 FormData 가져오기
    const formData = await request.formData();
    const file = formData.get("file") as File;

    console.log("🔍 파일 업로드 요청 수신됨");

    // OpenAI API 요청
    const openaiFormData = new FormData();
    openaiFormData.append("file", file);
    openaiFormData.append("purpose", "vision"); // ✅ Vision 용도로 파일 업로드

    // OpenAI API 요청
    const response = await fetch("https://api.openai.com/v1/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // ✅ 서버에서 환경 변수 사용
      },
      body: openaiFormData,
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("❌ OpenAI 파일 업로드 실패:", error);
      return NextResponse.json(
        { error: "File upload failed", details: error },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ OpenAI 파일 업로드 성공:", data);

    return NextResponse.json({ success: true, fileId: data.id });
  } catch (error) {
    console.error("🔥 파일 업로드 API 오류 발생:", error);

    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Create a new thread
export async function POST() {
  try {
    console.log("🔍 API 요청 수신됨"); // API 호출 확인
    if (!openai) {
      throw new Error("❌ OpenAI 인스턴스가 초기화되지 않음");
    }

    const thread = await openai.beta.threads.create();
    return Response.json({ threadId: thread.id });
  } catch (error) {
    console.error("🔥 API 실행 중 오류 발생:", error);
    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

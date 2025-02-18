export const dynamic = "force-dynamic"; // ✅ Next.js가 이 API를 정적으로 캐싱하지 않도록 설정

export async function POST(request: Request) {
  console.log("🔍 파일 업로드 API 호출됨");

  return new Response(JSON.stringify({ message: "파일 업로드 성공" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// export async function POST(request: Request) {
//   console.log("🔍 파일 업로드 요청 수신됨1");
//   try {
//     // 요청에서 FormData 가져오기
//     console.log("🔍 파일 업로드 요청 수신됨2");
//     const formData = await request.formData();
//     const file = formData.get("file") as File;
//     console.log("🔍 파일 업로드 요청 수신됨3");

//     // OpenAI API 요청
//     const openaiFormData = new FormData();
//     console.log("🔍 파일 업로드 요청 수신됨4");
//     openaiFormData.append("file", file);
//     console.log("🔍 파일 업로드 요청 수신됨5");
//     openaiFormData.append("purpose", "vision"); // ✅ Vision 용도로 파일 업로드
//     console.log("🔍 파일 업로드 요청 수신됨6");

//     console.log(process.env.OPENAI_API_KEY);
//     console.log(openaiFormData);

//     console.log("🔍 파일 업로드 요청 수신됨");
//     // OpenAI API 요청
//     const response = await fetch("https://api.openai.com/v1/files", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // ✅ 서버에서 환경 변수 사용
//       },
//       body: openaiFormData,
//     });

//     console.log("🔍 OpenAI API 응답 상태 코드:", response.status);

//     if (!response.ok) {
//       const error = await response.json();
//       console.error("❌ OpenAI 파일 업로드 실패:", error);
//       return Response.json(
//         { error: "File upload failed", details: error },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     console.log("✅ OpenAI 파일 업로드 성공:", data);

//     return Response.json({ success: true, fileId: data.id });
//   } catch (error) {
//     console.error("🔥 파일 업로드 API 오류 발생:", error);

//     return Response.json(
//       { error: "Internal Server Error", details: error.message },
//       { status: 500 }
//     );
//   }
// }

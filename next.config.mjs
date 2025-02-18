/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY, // ✅ 환경 변수를 빌드 타임에 강제 적용
  },
  //사이트 접속 시 /examples/basic-chat 페이지로 이동
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/examples/basic-chat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

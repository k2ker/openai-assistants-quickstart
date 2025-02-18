/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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

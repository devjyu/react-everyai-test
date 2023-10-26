/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// 외부의 이미지 사용하기 위해서
module.exports = {
    images: {
      domains: ['via.placeholder.com'], // 이미지를 허용할 도메인을 추가
    },
  };
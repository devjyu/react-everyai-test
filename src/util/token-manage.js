import {
  getRefreshToken,
  setRefreshToken,
  setAccessToken,
  removeAccessToken,
  removeRefreshToken,
} from "./cookie";

export async function fetchData(refreshToken) {
  const refreshTokenDTO = {
    refreshToken: refreshToken,
  };
  try {
    const response = await fetch(
      "http://10.10.10.12:8080/api/v1/auth/relogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refreshTokenDTO), // 요청의 본문에 refreshToken을 보냅니다.
      }
    );
    // 401 또
    console.log("relogin fetch 통과");
    console.log(response);
    if (response.ok) {
      const data = await response.json(); // 응답이 JSON 형식인 것으로 가정합니다.

      if (data.data.accessToken) {
        removeAccessToken("accessToken");
        removeRefreshToken("refreshToken");
        console.log("여기");
        // setAccessToken 및 setRefreshToken이 상태를 설정하는 함수라고 가정합니다.
        setAccessToken("accessToken", data.data.accessToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        setRefreshToken("refreshToken", data.data.refreshToken, {
          path: "/",
          secure: true,
          sameSite: "none",
        });
      }
        location.reload();
    } else if (response.status === 401) {
        // 여기서 발생하는 모든 오류를 처리합니다.
        removeAccessToken("accessToken");
        removeRefreshToken("refreshToken");
        location.replace("/login");
    }
} catch (error) {
    console.error("데이터 가져오기 중 오류 발생:", error);
  }
}

export function errorHandle(error) {
  if (error.status === 401) {
    console.log("에러 핸들러 진입");
    console.log(error); //401
    const refreshToken = getRefreshToken("refreshToken");
    fetchData(refreshToken); // refreshToken을 fetchData 함수로 전달합니다.
  }
}

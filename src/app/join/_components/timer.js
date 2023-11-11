import React, { useState, useEffect, useRef } from "react";

const Timer = ({ onTimeout }) => {
  const [min, setMin] = useState(5); // 변경된 부분: 기본 값 5로 변경
  const [sec, setSec] = useState(0);
  const time = useRef(300); // 변경된 부분: 기본 값 300으로 변경 (5분은 300초)
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60, 10)); // parseInt에 진수를 명시
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current <= 0) {
      console.log("타임 아웃");
      clearInterval(timerId.current);
      // 여기에서 원하는 작업 수행 (예: 이벤트 디스패치)
      onTimeout();
    }
  }, [sec, onTimeout]);

  console.log(min);

  return (
    <div>
      <p className="timer">
        남은 시간: {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </p>
    </div>
  );
};

export default Timer;

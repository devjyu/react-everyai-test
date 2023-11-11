"use client"
import '@/app/login/login.css';
import UserLayout from '../../_components/user-layout';
import LoginText from './_components/text';
import LoginInput from './_components/input';
import MovementButton from './_components/button';
import SocialLogin from './_components/social-login';


export default function Login() {

  const handleLogin = () => {
    alert("로그인에 성공하셨습니다.");
    location.replace('/main');
  }

  return (
    <UserLayout>
      <LoginText />
      <LoginInput onLogin={handleLogin}/>
      <MovementButton />
      <SocialLogin />
    </UserLayout>
  )
}

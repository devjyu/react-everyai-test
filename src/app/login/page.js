import '@/app/login/login.css';
import LoginText from './login-components/login-text';
import LoginInput from './login-components/login-input';
import MovementButton from './login-components/movement-button';
import SocialLogin from './login-components/social-login';


export default function Login() {
  return (
    <>
      <LoginText />
      <LoginInput />
      <MovementButton />
      <SocialLogin />
    </>
  )
}

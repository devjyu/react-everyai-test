import '@/app/login/login.css';
import UserLayout from '../../_components/user-layout';
import LoginText from './_components/login-text';
import LoginInput from './_components/login-input';
import MovementButton from './_components/movement-button';
import SocialLogin from './_components/social-login';


export default function Login() {
  return (
    <UserLayout>
      <LoginText />
      <LoginInput />
      <MovementButton />
      <SocialLogin />
    </UserLayout>
  )
}

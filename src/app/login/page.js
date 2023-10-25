import '@/app/login/login.css';
import UserLayout from '../../_components/user-layout';
import LoginText from './_components/text';
import LoginInput from './_components/input';
import MovementButton from './_components/button';
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

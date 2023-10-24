import '@/app/login/login.css';
import UserLayout from '../_components/user-layout';
import LoginText from './login-components/login-text';
import LoginInput from './login-components/login-input';
import MovementButton from './login-components/movement-button';
import SocialLogin from './login-components/social-login';


export default function Login() {
  return (
    <UserLayout>
      <div class="login-container">
        <LoginText />
        <LoginInput />
        <MovementButton />
        <SocialLogin />
      </div>
    </UserLayout>
  )
}

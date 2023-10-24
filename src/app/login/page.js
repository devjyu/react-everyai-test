import '@/app/login/login.css';
import Comment from './login-components/login-text';
import Input from './login-components/login-input';
import Button from './login-components/movement-button';
import SocialLogin from './login-components/social-login';


export default function login() {
  return (
    <>
      <Comment />
      <Input />
      <Button />
      <SocialLogin />
    </>
  )
}

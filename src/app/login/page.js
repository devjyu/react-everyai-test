import '@/app/login/login.css';
import Comment from './login-components/comment';
import Input from './login-components/input';
import Button from './login-components/button';
import Social from './login-components/social';


export default function login() {
  return (
    <>
      <Comment />
      <Input />
      <Button />
      <Social />
    </>
  )
}

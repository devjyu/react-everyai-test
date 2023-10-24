import '@/app/email-check/email-check.css';
import UserLayout from '../../_components/user-layout';
import EmailCheckInput from './_components/email-check-input';

export default function EmailCheck() {
    return(
        <UserLayout>
            <div class="info">
                <p>Find to <span class="blue">Every AI</span></p>
                <div class="subtitle">
                    <span class="blue"> 비밀번호</span>를<br />
                    잊어버리셨나요?
                </div>
                <p class="subtitle-info">
                입력하신 이메일 확인이 필요해요 <br />
                입력해주세요!
                </p>
            </div>
            <EmailCheckInput />
        </UserLayout>
    );
}
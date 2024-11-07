//피드백 수정 완료

//피드백 내용
//pages>login.jsx를 보면 idInput, passwordInput이 같은 스타일링이 적용되는데 따로 컴포넌트를 만드셨던데 굳이 싶어요. 
//다른 비슷한 디자인들도 재사용하는 방식으로 수정해주세요!

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const Login = () => {
    const loginschema = yup.object({
        email: yup.string().email('이메일이 올바르지 않습니다. 확인해주세요').required('이메일은 필수 입력 항목입니다.'),
        password: yup.string().min(8, '비밀번호는 8자리 이상이어야 합니다.').max(16, '비밀번호는 16자리 이하로 입력해주세요.').required('비밀번호를 입력해주세요.')
    });

    const { register, handleSubmit, formState: { errors, touchedFields, isValid } } = useForm({
        resolver: yupResolver(loginschema),
        mode: 'all'
    });
    
    const LoginBox = (data) => {
        console.log('로그인 시도:', data);
    };

    return (
        <Wrapper>
            <LoginText>로그인</LoginText>

            <Form onSubmit={handleSubmit(LoginBox)}>
                <Field>
                    <Input
                        type="email"
                        placeholder="이메일 주소를 입력하세요."
                        {...register("email")}
                        isTouched={touchedFields.email}
                        top="336px"
                        left="648px"
                    />
                    <ErrorText>{touchedFields.email && errors.email?.message}</ErrorText>
                </Field>

                <Field>
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        {...register("password")}
                        isTouched={touchedFields.password}
                        top="428px"
                        left="648px"
                    />
                    <ErrorText>{touchedFields.password && errors.password?.message}</ErrorText>
                </Field>

                <LoginButton type="submit" disabled={!isValid}>로그인</LoginButton>
            </Form>
        </Wrapper>
    );
};

export default Login;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #413F3F;
`;

const LoginText = styled.h1`
    position: absolute;
    top: 200px;
    left: 824px;
    font-size: 40px;
    color: #FFFFFF;
    white-space: nowrap;
`;


const Form = styled.form`
    position: relative;
`;

const Field = styled.div`
    position: relative;
`;

const Input = styled.input`
    padding: 10px;
    width: 450px;
    height: 50px;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    border: 1px solid ${(props) => (props.isTouched ? '#FF073D' : '#000000')};
    border-radius: 10px;
    font-size: 16px;
    background-color: #FFFFFF;
    color: #000000;
    opacity: 1;

     &:focus {
         outline: none;
         border-color: #FF073D;
     }
`;

const ErrorText = styled.p`
    color: #FF073D;
    font-size: 13px;
    width: 450px;
    height: 14px;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    opacity: 1;
`;

const LoginButton = styled.button`
    padding: 10px;
    width: 474px;
    height: 50px;
    position: absolute;
    top: 520px;
    left: 648px;
    background-color: ${(props) => (props.disabled ? '#413F3F' : '#FF073D')};
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 16px;
    opacity: 1;

    &:hover {
        background-color: ${(props) => (props.disabled ? '#413F3F' : '#0000FF')};
    }
`;
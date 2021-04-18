import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import InputPassword from '../../Common/Inputs/InputPassword';
import InputText from '../../Common/Inputs/InputText';
import s from './AuthForm.module.scss';

const AuthForm: FC = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        login: '',
        password: '',
        passRepeat: '',
    });

    return (
        <>
            <div className={s.wrapper}>
                <form className={s.form}>
                    <h1>Welcome back!</h1>
                    <div>
                        <InputText
                            title="Login"
                            formKey="login"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <InputPassword
                            title="Password"
                            formKey="password"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <button type="button"> Log In </button>
                    </div>
                    <div className={s.signUp}>
                        <span>
                            Don&apos;t have an account?{' '}
                            <Link to="/registration">Free Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AuthForm;

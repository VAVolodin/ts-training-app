import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import InputPassword from '../../Common/Inputs/InputPassword';
import InputText from '../../Common/Inputs/InputText';
import s from './RegistrationForm.module.scss';

const RegistrationForm: FC = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        login: '',
        password: '',
        passRepeat: '',
    });

    // const checker: any = () => {
    //     if (formValue.password === formValue.passRepeat) {
    //         return 'ЖОПА';
    //     }
    //     return 'ДВЕжопы';
    // };

    // useEffect(checker, [formValue.password, formValue.passRepeat]);

    return (
        <>
            <div className={s.wrapper}>
                <form className={s.form}>
                    <h1>Free Sign Up</h1>
                    <div>
                        <InputText
                            title="Name"
                            formKey="name"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <InputText
                            formKey="email"
                            title="E-mail"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <InputText
                            formKey="login"
                            title="Login"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <InputPassword
                            formKey="password"
                            title="Password"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <InputPassword
                            formKey="passrepeat"
                            title="Repeat Password"
                            formValue={formValue}
                            setFormValue={setFormValue}
                        />
                        <button type="button"> Sign Up </button>
                    </div>
                    <div className={s.signUp}>
                        <span>
                            Already have an account?{' '}
                            <Link to="/auth">Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;

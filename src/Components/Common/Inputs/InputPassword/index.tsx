import React, { FC } from 'react';
import s from './InputPassword.module.scss';

interface IProps {
    formValue: any;
    setFormValue: any;
    formKey: string;
    title: string;
}

const InputPassword: FC<IProps> = (props: IProps) => {
    const { title, formValue, setFormValue, formKey } = props;
    return (
        <>
            <input
                placeholder={title}
                className={s.password}
                type="password"
                onChange={(e) =>
                    setFormValue({
                        ...formValue,
                        [formKey]: e.currentTarget.value,
                    })
                }
                value={formValue.formKey}
            />
        </>
    );
};

export default InputPassword;

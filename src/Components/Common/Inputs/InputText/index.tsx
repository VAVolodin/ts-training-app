import React, { FC } from 'react';
import s from './InputText.module.scss';

interface IProps {
    formValue: any;
    setFormValue: any;
    formKey: string;
    title: string;
}

const InputText: FC<IProps> = (props: IProps) => {
    const { title, formValue, setFormValue, formKey } = props;
    return (
        <>
            <input
                placeholder={title}
                className={s.input}
                type="text"
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

export default InputText;

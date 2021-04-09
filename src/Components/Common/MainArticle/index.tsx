import React from 'react';
import s from './MainArticle.module.scss';
import Messages from './Messages';
import Music from './Music';
import News from './News';
import Profile from './Profile';
import Settings from './Settings';

interface IProps {
    userName: string;
    birthDate?: string;
    city?: string;
    education?: string;
    web?: string;
    avatar?: string;
}

class MainArticle extends React.PureComponent<IProps> {
    // constructor(props: IProps){
    //     super(props);
    // }
    render() {
        const {
            userName,
            birthDate,
            city,
            education,
            web,
            avatar,
        } = this.props;
        return (
            <>
                <section className={s.article}>
                    <Profile
                        userName={userName}
                        avatar={avatar}
                        birthDate={birthDate}
                        city={city}
                        education={education}
                        web={web}
                    />
                    <Messages />
                    <News />
                    <Music />
                    <Settings />
                </section>
            </>
        );
    }
}

export default MainArticle;

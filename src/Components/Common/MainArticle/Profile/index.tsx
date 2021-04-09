import React from 'react';
import s from './Profile.module.scss';
// import imgs from '../../../../assets/avatars/Wander_Happy.png';

interface IProps {
    propAr?: Array<any>;
    userName: string;
    birthDate?: string;
    city?: string;
    education?: string;
    web?: string;
    avatar?: string;
}

class Profile extends React.PureComponent<IProps> {
    render() {
        const {
            propAr,
            userName,
            birthDate,
            city,
            education,
            web,
            avatar,
        } = this.props;
        return (
            <>
                <div className={s.wrap}>
                    <div className={s.profile_wrap}>
                        <img src={avatar} alt="avatar" className={s.avatar} />
                        <div className={s.user_info}>
                            <h3>{userName}</h3>
                            <p>
                                <span>Date of Birth: {birthDate}</span>
                                <span>City: {city}</span>
                                <span>Education: {education}</span>
                                <span>Web-site: {web}</span>
                            </p>
                        </div>
                    </div>
                    <div className={s.input}>
                        <textarea className={s.utext} />
                        <button type="button">Post =)</button>
                    </div>
                    <div className={s.posts}>
                        {/* <Posts user={userName} /> */}
                        <div className={s.post}>
                            <img
                                src={avatar}
                                alt="avatar"
                                className={s.post_avatar}
                            />
                            <span>
                                post 1 <br />
                                &lt; Time&Date &gt;
                            </span>
                            <br />
                            <button type="button">Remove =(</button>
                            <hr />
                        </div>
                        <div className={s.post}>
                            <img
                                src={avatar}
                                alt="avatar"
                                className={s.post_avatar}
                            />
                            <span>
                                post 2 <br />
                                &lt; Time&Date &gt;
                            </span>
                            <br />
                            <button type="button"> Remove =( </button>
                            <hr />
                        </div>
                        <div className={s.post}>
                            <img
                                src={avatar}
                                alt="avatar"
                                className={s.post_avatar}
                            />
                            <span>
                                post 3 <br />
                                &lt; Time&Date &gt;
                            </span>
                            <br />
                            <button type="button">Remove =(</button>
                            <hr />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;

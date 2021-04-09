import React from 'react';
import s from './SideBar.module.scss';

class SideBar extends React.PureComponent {
    render() {
        return (
            <>
                <section className={s.side}> SideBar </section>
            </>
        );
    }
}

export default SideBar;

import React from 'react';
import s from './FtrBar.module.scss';

interface IProps {
    title?: string;
    row1?: any;
    row2?: any;
    row3?: any;
    row4?: any;
}

class FtrBar extends React.PureComponent<IProps> {
    render() {
        const { title, row1, row2, row3, row4 } = this.props;

        return (
            <>
                <div className={s.clmn}>
                    <div className={s.row}> {row1} </div>
                    <div className={s.row}> {row2} </div>
                    <div className={`${s.row} ${s.title}`}>
                        {!title ? row3 : title}
                    </div>
                    <div className={s.row}> {row4} </div>
                </div>
            </>
        );
    }
}
export default FtrBar;

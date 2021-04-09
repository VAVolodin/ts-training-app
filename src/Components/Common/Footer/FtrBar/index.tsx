import React from 'react';
import s from './FtrBar.module.scss';
import FtrColRow from './FtrColRow';

interface IProps {
    rowsList?: Array<any>;
    title?: string;
}

class FtrBar extends React.PureComponent<IProps> {
    render() {
        const { rowsList } = this.props;
        const { title } = this.props;

        return (
            <>
                <div className={s.clmn}>
                    <FtrColRow title={title} rowsList={rowsList} />
                </div>
            </>
        );
    }
}
export default FtrBar;

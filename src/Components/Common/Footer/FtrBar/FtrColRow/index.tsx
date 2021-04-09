/* eslint-disable no-nested-ternary */
import React from 'react';
import s from './FtrColRow.module.scss';

interface IProps {
    rowsList?: Array<any>;
    title?: string;
}

class FtrColRow extends React.PureComponent<IProps> {
    render() {
        const { rowsList } = this.props;
        const { title } = this.props;
        const titleRend = !title ? null : (
            <div className={s.title}> {title}</div>
        );
        const isRowsList = !rowsList
            ? false
            : rowsList.map((row) => <div className={s.row}> {row}</div>);
        return (
            <>
                {titleRend}
                {isRowsList}
            </>
        );
    }
}
export default FtrColRow;

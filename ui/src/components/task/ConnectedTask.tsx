import {Task, TaskProps} from "./Task";
import {connect} from "react-redux";

const mapStateToProps = (storeState: any) => {
    return {
        ...storeState.task
    } as TaskProps;
};

export const ConnectedTask = connect(mapStateToProps)(Task);
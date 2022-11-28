import {TasksList} from "./TasksList";
import {connect} from "react-redux";

const mapStateToProps = (storeState: any) => {
    return {
        tasksList: storeState.tasksList.list
    }
};

export const ConnectedTasksList = connect(mapStateToProps)(TasksList);
import {connect} from "react-redux";
import {Breadcrumbs} from "./BreadCrumbs";

const mapStateToProps = (storeState: any) => {
    return {
        taskName: storeState.task.name,
        taskId: storeState.task.id,
    }
};

export const ConnectedBreadCrumbs = connect(mapStateToProps)(Breadcrumbs);
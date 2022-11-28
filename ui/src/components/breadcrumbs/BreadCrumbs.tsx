import {Breadcrumb} from "antd";
import React from "react";
import {Link, Route} from "react-router-dom";

export interface BreadCrumbsProps {
    taskName?: string;
    taskId?: string | number;
}

export const Breadcrumbs = (props: BreadCrumbsProps) => (
    <Breadcrumb style={{ margin: '16px 0' }}>
        <Route path="/">
            <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
        </Route>

        <Route path="/tasks">
            <Breadcrumb.Item><Link to={"/tasks"}>Tasks</Link></Breadcrumb.Item>
        </Route>
        <Route path="/tasks/:id">
            <Breadcrumb.Item><Link to={`/tasks/${props.taskId}`}>{props.taskName}</Link></Breadcrumb.Item>
        </Route>

        <Route path="/auth">
            <Breadcrumb.Item><Link to={"/auth"}>Authenticate</Link></Breadcrumb.Item>
        </Route>
        <Route path="/logout">
            <Breadcrumb.Item><Link to={"/logout"}>Logout</Link></Breadcrumb.Item>
        </Route>
    </Breadcrumb>
);
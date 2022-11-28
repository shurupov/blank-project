import React from "react";
import {Card, Col, Row} from "antd";
import { Link } from "react-router-dom";
import {TaskProps} from "../task/Task";

interface TasksListProps {
    tasksList: Array<TaskProps>;
}

export const TasksList = (props: TasksListProps) => {
    const cols = [];
    for (let j = 0; j < props.tasksList.length; j++) {
        cols.push(
            <Col span={8} key={j}>
                <Card title={props.tasksList[j].title} bordered={true} extra={<Link to={`/tasks/${props.tasksList[j].id}`}>More</Link>}>
                    {props.tasksList[j].content}
                </Card>
            </Col>
        );
    }
    return <>
        <Row gutter={[16, 24]}>{cols}</Row>
    </>;
}
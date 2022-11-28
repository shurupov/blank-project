import React from "react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import {ConnectedTasksList} from "../tasksList/ConnectedTasksList";

export interface TaskProps {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}

export const Task = (props: TaskProps) => {
    return <>
        <Title>{props.name}</Title>
        <Paragraph>{props.description}</Paragraph>
        <ConnectedTasksList />
    </>;
}
import React from "react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import {ConnectedTasksList} from "../tasksList/ConnectedTasksList";

export interface TaskProps {
    id: number;
    title: string;
    content: string;
    award: string;
}

export const Task = (props: TaskProps) => {
    return <>
        <Title>{props.title}</Title>
        <Paragraph>{props.content}</Paragraph>
        <br/>
        <br/>
        <br/>
        <ConnectedTasksList />
    </>;
}
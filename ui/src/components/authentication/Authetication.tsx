import {Button, Col, Form, Input, Row} from "antd";
import React from "react";

export interface AuthRequest {
    username: string;
    password: string;
}

interface AuthProps {
    submit: (values: AuthRequest) => void;
}

export const Authentication = (props: AuthProps) => {

    const onFinishFailed = (errorInfo: any) => {
        //console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={8} offset={8}>
                <Form
                    layout="vertical"
                    name="basic"
                    onFinish={props.submit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input autoComplete="off"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password autoComplete="off"/>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};
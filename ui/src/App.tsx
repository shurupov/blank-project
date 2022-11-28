import 'antd/dist/antd.css';
import React from "react";
import { Layout } from 'antd';
import {Provider} from "react-redux";
import {store, history} from "./store/store";
import {ConnectedRouter} from "connected-react-router";
import {CustomContent} from "./components/customContent/CustomContent";
import "./utils/app.css";
import {ConnectedTopMenu} from "./components/topMenu/ConnectedTopMenu";

const { Content } = Layout;

export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <ConnectedTopMenu />
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/*<ConnectedBreadCrumbs />*/}
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0,
                                minHeight: 280,
                                padding: 24
                            }}
                        >
                            <CustomContent />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </ConnectedRouter>
    </Provider>
);
import React, { useState } from 'react';
import { Button, Row, Col, Layout, Icon } from 'antd';
import Title from 'antd/lib/typography/Title';

import CategoryModal from '../components/dashboard/category/CategoryModal';
import CategoryTable from '../components/dashboard/category/CategoryTable';

const { Header, Content } = Layout;

const CategoriesPage = () => {

    return (
        <div>
            <Header style={{ lineHeight: 0 }}>
                <Row>
                    <Col md={4}>
                        <Title level={4}>Categorias</Title>
                    </Col>
                    <Col sm={4} md={4} offset={16}>
                        <CategoryModal />
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col span={24}>
                        <CategoryTable />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default CategoriesPage;

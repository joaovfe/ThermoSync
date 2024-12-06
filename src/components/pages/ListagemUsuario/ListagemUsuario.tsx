import React, { useState } from "react";
import { Card, Table, Space, Button, Col, Row } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

interface Usuario {
    key: string;
    nome: string;
    email: string;
}


const ListagemUsuario: React.FC = () => {
    const [dataSource, setDataSource] = useState<Usuario[]>(() => {
        const data = localStorage.getItem('usuarios')
        return data ? JSON.parse(data) : [];
    });

    const navigate = useNavigate();

    const columns =
        [
            {
                title: 'Nome',
                dataIndex: 'nome',
                key: 'nome',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: '',
                key: 'action',
                render: (_: unknown, record: Usuario) => (
                    <Space size="middle">
                        <Button
                            type="default"
                            icon={<EditOutlined />}
                            onClick={() => editUsuario(record)}
                        />
                        <Button
                            danger
                            type="dashed"
                            icon={<DeleteOutlined />}
                            onClick={() => deleteUsuario(record)}
                        />
                    </Space>
                ),
            },
        ]

    const deleteUsuario = (usuario: Usuario) => {
        const usuarios = dataSource.filter((item) => item.key !== usuario.key);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        setDataSource(usuarios);
    };

    const editUsuario = (usuario: Usuario) => {
        navigate(`/FormUsuario/${usuario.key}`);
    };

    const addUsuario = () => {
        navigate('/FormUsuario');
    };

    return (
        <div>
            <Card
                title="Usuários"
                size="small"
                extra={
                    <Button type="primary" onClick={addUsuario} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        +
                    </Button>
                }
            >
                <Row>
                    <Col span={18} offset={3}>
                        <Table<Usuario>
                            rowKey="key"
                            columns={columns}
                            dataSource={dataSource}
                        />
                    </Col>
                </Row>
            </Card>
            <NavigationBar />
        </div>
    );
};

export default ListagemUsuario;
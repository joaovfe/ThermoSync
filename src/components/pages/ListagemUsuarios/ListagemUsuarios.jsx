import React, { useState } from 'react';
import { Card, Table, Space, Button, Col, Row } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

function ListagemUsuario() {
  const [dataSource, setDataSource] = useState(() => {
    const savedData = localStorage.getItem('usuarios');
    return savedData ? JSON.parse(savedData) : [];
  });

  const navigate = useNavigate();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Permissão',
      dataIndex: 'permissao',
    },
    {
      title: 'Ações',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => editUsuario(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => deleteUsuario(record)}
          />
        </Space>
      ),
    },
  ];

  const deleteUsuario = (usuario) => {
    const updatedData = dataSource.filter((item) => item.key !== usuario.key);
    localStorage.setItem('usuarios', JSON.stringify(updatedData));
    setDataSource(updatedData);
  };

  const editUsuario = (usuario) => {
    navigate(`/FormUsuario/${usuario.key}`);
  };

  const addUsuario = () => {
    navigate('/FormUsuario');
  };

  return (
    <Card
      title="Usuários"
      extra={<Button type="primary" onClick={addUsuario}>Adicionar Usuário</Button>}
    >
      <Row>
        <Col span={20} offset={2}>
          <Table rowKey="key" columns={columns} dataSource={dataSource} />
        </Col>
      </Row>
    <NavigationBar />
    </Card>
    
  );
}

export default ListagemUsuario;

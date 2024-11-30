import React, { useState } from 'react';
import { Card, Table, Space, Button, Col, Row } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

function ListagemCliente() {
  const [dataSource, setDataSource] = useState(() => {
    const savedData = localStorage.getItem('clientes');
    return savedData ? JSON.parse(savedData) : ''; 
  });

  const navigate = useNavigate();

  const columns = [
    {
      title: 'Cnpj',
      dataIndex: 'cnpj',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
    },
    {
      title: 'Endereço',
      dataIndex: 'endereco',
    },
    {
      title: 'Municipio',
      dataIndex: 'municipio'
    },
    {
      title: 'Estado',
      dataIndex: 'estado'
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button color="default" variant="outlined" icon={<EditOutlined />} onClick={() => editCliente(_)} ></Button>
          <Button color="danger" variant="dashed" icon={<DeleteOutlined />} onClick={() => deleteCliente(_)}></Button>
        </Space>
      ),
    }
  ];

  function deleteCliente(cliente) {
    let clientes = JSON.parse(localStorage.getItem('clientes'))
    clientes = clientes.filter(item => item.key != cliente.key)
    localStorage.setItem('clientes', JSON.stringify(clientes))
    setDataSource(JSON.parse(localStorage.getItem('clientes')))
  }

  function editCliente(cliente) {
    navigate(`/FormCliente/${cliente.key}`)
  }

  function addCliente() {
    navigate('/FormCliente')
  }

  return (
    <div>
      <Card title="Clientes" size="small" extra={<Button type="primary" onClick={() => addCliente()}>Add. Cliente</Button>}>
        <Row>
          <Col span={18} offset={3}>
            <Table
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
}

export default ListagemCliente;
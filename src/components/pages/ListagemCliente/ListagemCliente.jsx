import React, { useState } from 'react';
import { Card, Table, Space, Button, Col, Row } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import "./ListagemCliente.css";

function ListagemCliente() {
  const [dataSource, setDataSource] = useState(() => {
    const savedData = localStorage.getItem('clientes');
    return savedData ? JSON.parse(savedData) : [];
  });

  const navigate = useNavigate();

  const columns = [
    {
      title: 'CNPJ',
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
      title: 'Município',
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
        <Space size="small">
          <Button 
            type="default" 
            icon={<EditOutlined />} 
            onClick={() => editCliente(record)} 
          />
          <Button 
            type="primary" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => deleteCliente(record)} 
          />
        </Space>
      ),
    }
  ];

  function deleteCliente(cliente) {
    let clientes = JSON.parse(localStorage.getItem('clientes'));
    clientes = clientes.filter(item => item.key !== cliente.key);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    setDataSource(clientes);
  }

  function editCliente(cliente) {
    navigate(`/FormCliente/${cliente.key}`);
  }

  function addCliente() {
    navigate('/FormCliente');
  }

  return (
    <div>
      <NavigationBar />
      <div className="table-container">
        <Card 
          title="Clientes" 
          size="small" 
          extra={
            <Button 
              type="primary" 
              onClick={addCliente}
              style={{ fontWeight: 'bold' }}
            >
              Adicionar Cliente
            </Button>
          }
        >
          <Row justify="center">
            <Col span={24} className="table-wrapper">
              <Table
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 5 }}
                scroll={{ x: '100%' }}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default ListagemCliente;

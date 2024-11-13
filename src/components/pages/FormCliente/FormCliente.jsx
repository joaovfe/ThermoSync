import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Card, Row, Col, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import './FormCliente.css';

const { Option } = Select;

function FormCliente() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    recuperaCliente();
  }, []);

  function recuperaCliente() {
    if (!id) return;

    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const cliente = clientes.find(item => item.key == id);
    if (cliente) form.setFieldsValue(cliente);
  }

  function handleSubmit() {
    if (id) handleClienteExistente();
    else handleNovoCliente();
    navigate('/ListagemCliente');
  }

  function handleClienteExistente() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const index = clientes.findIndex(item => item.key == id);
    if (index >= 0) {
      clientes[index] = { key: id, ...form.getFieldsValue() };
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
  }

  function handleNovoCliente() {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.sort((a, b) => a.key - b.key);
    const lastId = clientes.length > 0 ? clientes[clientes.length - 1].key : 0;

    clientes.push({ key: lastId + 1, ...form.getFieldsValue() });
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  function handleBack() {
    navigate('/ListagemCliente');
  }

  return (
    <div className="form-cliente-container">
      <NavigationBar />
      <Card title="Adicionar Cliente" size="small" className="form-card">
        <Form
          form={form}
          layout="vertical"
          className="form-content"
          onFinish={handleSubmit}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="nome" label="Nome">
                <Input placeholder="Nome" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="cnpj" label="CNPJ">
                <Input placeholder="CNPJ" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="endereco" label="Endereço">
                <Input placeholder="Endereço" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="municipio" label="Município">
                <Input placeholder="Município" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="estado" label="Estado">
            <Select placeholder="Selecione o estado">
              <Option value="AC">Acre</Option>
              <Option value="AL">Alagoas</Option>
              <Option value="AP">Amapá</Option>
              <Option value="AM">Amazonas</Option>
              <Option value="BA">Bahia</Option>
              <Option value="CE">Ceará</Option>
              <Option value="DF">Distrito Federal</Option>
              <Option value="ES">Espírito Santo</Option>
              <Option value="GO">Goiás</Option>
              <Option value="MA">Maranhão</Option>
              <Option value="MT">Mato Grosso</Option>
              <Option value="MS">Mato Grosso do Sul</Option>
              <Option value="MG">Minas Gerais</Option>
              <Option value="PA">Pará</Option>
              <Option value="PB">Paraíba</Option>
              <Option value="PR">Paraná</Option>
              <Option value="PE">Pernambuco</Option>
              <Option value="PI">Piauí</Option>
              <Option value="RJ">Rio de Janeiro</Option>
              <Option value="RN">Rio Grande do Norte</Option>
              <Option value="RS">Rio Grande do Sul</Option>
              <Option value="RO">Rondônia</Option>
              <Option value="RR">Roraima</Option>
              <Option value="SC">Santa Catarina</Option>
              <Option value="SP">São Paulo</Option>
              <Option value="SE">Sergipe</Option>
              <Option value="TO">Tocantins</Option>
            </Select>
          </Form.Item>
          <Row justify="space-between">
            <Col>
              <Button onClick={handleBack} className="back-button">
                Voltar
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit" className="submit-button">
                Salvar
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default FormCliente;

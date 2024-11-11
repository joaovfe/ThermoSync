import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

function FormCliente() {
  const [form] = Form.useForm();
  const [cliente, setCliente] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  function recuperaCliente() {
    if (!id)
      return;

    let clientes = JSON.parse(localStorage.getItem('clientes'))
    let [cliente] = clientes.filter(item => item.key == id)
    form.setFieldsValue(cliente)
  }

  function handleSubmit() {
    if (id) {
      handleClienteExistente()
    } else {
      handleNovoCliente()
    }
    navigate('/ListagemCliente')
  }

  function handleClienteExistente() {
    let clientes = JSON.parse(localStorage.getItem('clientes'))

    let index;
    clientes.forEach((item, i) => {
      if (item.key == id) {
        index = i
      }
    })

    clientes[index] = {key: id, ...form.getFieldsValue()}
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }

  function handleNovoCliente() {
    let clientes = JSON.parse(localStorage.getItem('clientes'))
    clientes.sort((a, b) => a.key - b.key)
    let lastId = clientes[clientes.length - 1].key;

    clientes[clientes.length] = {key: lastId + 1, ...form.getFieldsValue()}
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }

  recuperaCliente()

  return (
    <div>
      <NavigationBar/>
      <Card title="Adicionando Cliente" size="small">

        <Form form={form}
          layout='vertical' 
          wrapperCol={{ span: 14, offset: 5 }}
          onFinish={handleSubmit}>
            <Form.Item>
              <Form.Item name='nome' style={{ display: 'inline-block', width: 'calc(70%)' }}>
                <Input placeholder='Nome' value={cliente.nome}/>
              </Form.Item>
              <Form.Item name='cnpj' style={{ display: 'inline-block', width: 'calc(30% - 5px)', marginLeft: '5px' }}>
                <Input placeholder='CNPJ' value={cliente.cnpj}/>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item name='endereco' style={{ display: 'inline-block', width: 'calc(70%)' }}>
                <Input placeholder='Endereço' value={cliente.endereco}/>
              </Form.Item>

              <Form.Item name='municipio' style={{ display: 'inline-block', width: 'calc(30% - 5px)', marginLeft: '5px' }}>
                <Input placeholder='Municipio' value={cliente.municipio}/>
              </Form.Item>
            </Form.Item>
            <Form.Item name='estado'>
              <Input placeholder='Estado' value={cliente.estado}/>
            </Form.Item>

            <Form.Item wrapperCol={{span: 1, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default FormCliente;
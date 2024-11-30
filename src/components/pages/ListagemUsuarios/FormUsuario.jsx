import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

function FormUsuario() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { key } = useParams();
  const [usuarios, setUsuarios] = useState(() => {
    const savedData = localStorage.getItem('usuarios');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    if (key) {
      const usuario = usuarios.find((u) => u.key === key);
      if (usuario) {
        form.setFieldsValue(usuario);
      }
    }
  }, [key, form, usuarios]);

  const onFinish = (values) => {
    const updatedUsuarios = key
      ? usuarios.map((u) => (u.key === key ? { ...u, ...values } : u))
      : [...usuarios, { ...values, key: Date.now().toString() }];

    localStorage.setItem('usuarios', JSON.stringify(updatedUsuarios));
    setUsuarios(updatedUsuarios);
    navigate('/ListagemUsuario');
  };

  return (
    <Card title={key ? 'Editar Usuário' : 'Novo Usuário'}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="nome" label="Nome" rules={[{ required: true, message: 'Insira o nome!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="E-mail" rules={[{ required: true, type: 'email', message: 'Insira um e-mail válido!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Insira o username!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="permissao" label="Permissão" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="user">Usuário</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {key ? 'Salvar Alterações' : 'Adicionar Usuário'}
          </Button>
          <Button style={{ marginLeft: '10px' }} onClick={() => navigate('/ListagemUsuario')}>
            Cancelar
          </Button>
        </Form.Item>
      </Form>
    </Card>
    
  );
}

export default FormUsuario;

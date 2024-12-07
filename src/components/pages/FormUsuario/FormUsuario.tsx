import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import NavigationBar from '../NavigationBar/NavigationBar';

interface Usuario {
  key: number;
  nome: string;
  email: string;
  senha: string;
}

const FormUsuario: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    recuperaUsuario();
  }, []);

  function recuperaUsuario() {
    if (!id) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
    const usuario = usuarios.find((item) => item.key === parseInt(id));
    if (usuario) {
      form.setFieldsValue(usuario);
    }
  }

  function handleSubmit(values: Omit<Usuario, 'key'>) {
    if (id) {
      handleUsuarioExistente(values);
    } else {
      handleNovoUsuario(values);
    }
    navigate('/ListagemUsuario');
  }

  function handleUsuarioExistente(values: Omit<Usuario, 'key'>) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];

    const index = usuarios.findIndex((item) => item.key === parseInt(id));
    if (index >= 0) {
      usuarios[index] = { key: parseInt(id), ...values };
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }

  function handleNovoUsuario(values: Omit<Usuario, 'key'>) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]') as Usuario[];
    const lastId = usuarios.length > 0 ? usuarios[usuarios.length - 1].key : 0;

    usuarios.push({ key: lastId + 1, ...values });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  const title = id ? "Editar Usuário" : "Cadastro de usuário"

  return (
    <div>
      <NavigationBar />
      <Card title={title} size="small">
        <Form
          form={form}
          layout="vertical"
          wrapperCol={{ span: 14, offset: 5 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="nome"
            label="Nome"
            rules={[{ required: true, message: 'O nome é obrigatório!' }]}
          >
            <Input placeholder="Nome" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'O email é obrigatório!' },
              { type: 'email', message: 'Insira um email válido!' },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="senha"
            label="Senha"
            rules={[
              { required: true, message: 'A senha é obrigatória!' },
              { min: 6, message: 'A senha deve ter no mínimo 6 caracteres!' },
            ]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 1, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormUsuario;
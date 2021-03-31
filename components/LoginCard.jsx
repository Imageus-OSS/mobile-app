import React from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

function LoginCard() {
  return (
    <Card title="Login">
      <Input placeholder="Username" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="Login" />
    </Card>
  );
}

export default LoginCard;

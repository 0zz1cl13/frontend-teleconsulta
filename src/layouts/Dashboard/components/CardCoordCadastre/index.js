import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import axios from "axios";
import { Button } from "@material-ui/core";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default function MultilineTextFields() {
  const [contato, setContato] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nomeCoord, setNomeCoord] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [formacao, setFormacao] = React.useState("");
  const [nasc, setNasc] = React.useState("");
  const [unidade, setUnidade] = React.useState("");
  const [inst, setInst] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleContato = event => {
    setContato(event.target.contato);
  };

  const handleCpf = event => {
    setCpf(event.target.cpf);
  };

  const handleEmail = event => {
    setEmail(event.target.email);
  };

  const handleCoord = event => {
    setNomeCoord(event.target.nome);
  };

  const handleCidade = event => {
    setCidade(event.target.cidade);
  };
  const handleData = event => {
    setNasc(event.target.data_nascimento);
  };
  const handleFormacao = event => {
    setFormacao(event.target.formacao);
  };
  const handleInst = event => {
    setInst(event.target.instituicao);
  };
  const handleUnidade = event => {
    setUnidade(event.target.unidade);
  };
  const handleSenha = event => {
    setSenha(event.target.password);
  };

  const handlePost = async e => {
    e.preventDefault();
    const form = e.target;
    const dataIn = new FormData(form);

    fetch("http://localhost:3333/coordenador", {
      method: "POST",
      body: dataIn
    });
    
    console.log(dataIn);
    return;
  };

  return (
    <div id="divCard">
      <h2>Cadastro de Coordenador</h2>
      <form action={handlePost} method="post">
        <div id="divLabel1">
          <TextField
            id="nome"
            label="Nome do Corrdenador"
            multiline
            rowsMax="4"
            value={nomeCoord}
            onChange={handleCoord}
          />

          <TextField
            id="email"
            label="Email"
            multiline
            rowsMax="4"
            value={email}
            onChange={handleEmail}
          />
          <TextField
            id="cpf"
            label="CPF"
            multiline
            rowsMax="4"
            type=""
            value={cpf}
            onChange={handleCpf}
          />
        </div>
        <div>
          <TextField
            id="cidade"
            label="Cidade"
            multiline
            rowsMax="4"
            value={cidade}
            onChange={handleCidade}
          />
          <TextField
            id="contato"
            label="Contato"
            multiline
            rowsMax="4"
            value={contato}
            onChange={handleContato}
          />
          <TextField
            id="data_nascimento"
            label="Data de Nascimento"
            multiline
            rowsMax="4"
            value={nasc}
            onChange={handleData}
          />
        </div>
        <div>
          <TextField
            id="formacao"
            label="Formação"
            multiline
            rowsMax="4"
            value={formacao}
            onChange={handleFormacao}
          />
          <TextField
            id="instituicao"
            label="Instituição"
            multiline
            rowsMax="4"
            value={inst}
            onChange={handleInst}
          />
          <TextField
            id="unidade"
            label="Unidade"
            multiline
            rowsMax="4"
            value={unidade}
            onChange={handleUnidade}
          />
          <TextField
            id="password"
            label="Senha"
            multiline
            rowsMax="4"
            value={senha}
            onChange={handleSenha}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

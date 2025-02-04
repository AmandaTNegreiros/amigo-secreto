# 🤫 Amigo Secreto

Este é um projeto de Amigo Secreto desenvolvido em HTML, CSS e JavaScript. O objetivo é permitir aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem será o "amigo secreto". Este projeto faz parte das aulas do Alura Oracle One e é um challenge para praticar a lógica de programação.

## 📜 Descrição do Projeto

O projeto consiste em uma aplicação web simples que permite aos usuários:

⦿ Adicionar nomes de amigos em uma lista.

⦿ Visualizar a lista de amigos adicionados.

⦿ Realizar um sorteio aleatório para determinar o "amigo secreto".


## 💠 Funcionalidades

⦿ **Adicionar nomes:** Os usuários podem escrever o nome de um amigo em um campo de texto e adicioná-lo à lista visível ao clicar no botão "Adicionar".

⦿ **Validar entrada:** Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

⦿ **Visualizar a lista:** Os nomes inseridos aparecem em uma lista abaixo do campo de entrada.

⦿ **Sorteio aleatório:** Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.


## 💻 Instalação

Para instalar e executar este projeto localmente, siga as instruções abaixo:

1. Clone este repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/AmandaTNegreiros/amigo-secreto.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd amigo-secreto
    ```

## Dependências

Este projeto não possui dependências externas. Apenas HTML, CSS e JavaScript padrão são utilizados.

## 🧩 Como Executar o Projeto

1. Abra o arquivo `index.html` no seu navegador web preferido para visualizar a aplicação.

2. Para adicionar nomes à lista, digite o nome no campo de texto e clique no botão "Adicionar".

3. Para realizar o sorteio de um amigo secreto, clique no botão "Sortear Amigo".


## 🚨 Possíveis Problemas e Soluções

### Problema: O alerta "Por favor, insira um nome." aparece repetidamente mesmo após inserir um nome válido.
**Solução:** Certifique-se de que o campo de texto não esteja vazio ao tentar adicionar um nome. Após inserir um nome válido, o alerta não deve aparecer novamente.

### Problema: A lista de amigos não está sendo atualizada corretamente.
**Solução:** Verifique se a função `atualizarListaAmigos` está sendo chamada após adicionar um novo nome ao array `amigos`.

## 📝 Contribuição

Se você deseja contribuir com este projeto, sinta-se à vontade para abrir um Pull Request ou relatar problemas na seção de Issues.


## ⭐ Informações Adicionais

Este projeto faz parte das aulas do **Alura Oracle One** e é um challenge para praticar a lógica de programação. O objetivo é aplicar os conceitos aprendidos durante o curso e aprimorar habilidades de desenvolvimento web.

---

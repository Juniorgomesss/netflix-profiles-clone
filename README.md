# 🎬 Netflix UI Clone

Um clone focado no Front-end da interface da Netflix, desenvolvido com atenção a detalhes de **UX/UI**, micro-interações e design responsivo. 

Este projeto evoluiu do projeto da imerção front-end da alura da tela de seleção de usuários em React puro (Vite) para uma aplicação robusta utilizando o ecossistema moderno do Next.js.

## ✨ Novidades e Implementações Recentes

A arquitetura do projeto foi totalmente refatorada para utilizar os padrões mais modernos da indústria:

* **🚀 Migração para Next.js (App Router):** O projeto agora utiliza a estrutura de roteamento do Next.js, permitindo uma navegação fluida (SPA) entre a tela de perfis e o catálogo de vídeos.
* **🎨 Estilização com Tailwind CSS v4:** Substituição do CSS tradicional por classes utilitárias do Tailwind, garantindo um código mais limpo, padronizado e fácil de manter.
* **🌓 Dark/Light Mode Global:** Implementação de um toggle de tema interativo no Header. A preferência do usuário é salva no `localStorage`, garantindo que o tema seja mantido entre os acessos.
* **📱 Design Totalmente Responsivo:** Layout fluido que se adapta perfeitamente a dispositivos móveis, tablets e desktops, com grids dinâmicos.
* **✨ Micro-interações de UX:** * Efeito de *hover* clássico da Netflix nos cards de vídeo (fade na imagem e exibição do botão de Play centralizado).
  * Imagens com proporção travada em 16:9 (`aspect-video`) com `object-cover` para garantir alinhamento perfeito do grid independentemente do tamanho original da imagem.
  * Transições suaves de cor (`transition-colors`) ao alternar entre os temas claro e escuro.

## 🛠️ Tecnologias Utilizadas

* **React 18**
* **Next.js** (App Router)
* **Tailwind CSS**
* **TypeScript**
* **Lucide React / SVGs** (Para iconografia)

## 🖥️ Telas do Projeto

1. **Seleção de Perfil (`/`):** Tela inicial onde o usuário escolhe quem está assistindo. Conta com animações de foco e borda similares à plataforma original.
2. **Catálogo / Home (`/home`):** Dashboard principal contendo um Header fixo com fundo em degradê, menu de navegação e o grid de "Filmes em Alta".

## ⚙️ Como rodar o projeto localmente

Pré-requisitos: Node.js instalado na sua máquina.

1. Faça o clone do repositório:
```bash
git clone [https://github.com/Juniorgomesss/netflix-profiles-clone.git](https://github.com/Juniorgomesss/netflix-profiles-clone.git)

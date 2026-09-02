# Trilha do Hacker

> Roadmap interativo de segurança ofensiva — do zero ao nível expert.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/Built%20with-HTML%2FCSS%2FJS-orange.svg)]()
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue.svg)]()

![Preview da Trilha do Hacker](https://via.placeholder.com/900x480/0b0d14/1ecfa6?text=Trilha+do+Hacker)

---

## Sobre o projeto

A **Trilha do Hacker** é um roadmap visual e interativo de segurança ofensiva, inspirado no [roadmap.sh](https://roadmap.sh). Ela organiza o aprendizado em 12 fases progressivas — de fundamentos de ética e legislação até engenharia reversa e pesquisa de vulnerabilidades — com mais de 50 tópicos detalhados e rastreamento de progresso individual.

O projeto é um único arquivo HTML autocontido, sem dependências externas, backend ou build process. Funciona diretamente no browser.

---

## Funcionalidades

- **12 fases progressivas** cobrindo toda a jornada de segurança ofensiva
- **50+ tópicos** com descrição detalhada e subtópicos específicos para cada área
- **Rastreamento de progresso** — marque subtópicos como concluídos; o tópico é completado automaticamente quando todos os subtópicos são marcados
- **Persistência local** — o progresso é salvo no `localStorage` e mantido entre sessões
- **Níveis de importância** — cada card indica se o tópico é Essencial, Importante ou Complementar
- **Tema claro/escuro** — adapta-se automaticamente ao tema do sistema operacional
- **Design responsivo** — funciona em desktop, tablet e mobile
- **Zero dependências** — nenhum framework, nenhum npm, nenhum build

---

## Fases do Roadmap

| Fase | Tema | Tópicos |
|------|------|---------|
| 00 | Mentalidade e Ética | Hacking ético, legislação, configuração de lab, mentalidade |
| 01 | Fundamentos | Arquitetura de computadores, Linux, programação, Python |
| 02 | Redes | OSI/TCP-IP, protocolos, Wireshark, firewall, VPN, IPv6 |
| 03 | Programação para Hacking | Python ofensivo, Bash, C, PowerShell, Assembly, Go/Rust |
| 04 | Criptografia | Fundamentos, PKI/TLS, hashing, ataques criptográficos |
| 05 | OSINT e Reconhecimento | OSINT, Google Dorks, Shodan, Nmap, DNS, automação |
| 06 | Web Hacking | OWASP Top 10, SQLi, XSS, API, SSRF, WAF bypass, GraphQL |
| 07 | Exploração de Sistemas | Metasploit, PrivEsc Linux/Windows, Active Directory, C2 |
| 08 | Engenharia Social | Phishing, pretexting, vishing, physical pentest |
| 09 | Hardware, Wireless e IoT | Wi-Fi, Bluetooth, SDR, IoT, RFID/NFC/Flipper Zero |
| 10 | Engenharia Reversa | Assembly, Ghidra/IDA, malware, exploits, fuzzing |
| 11 | Carreira e Prática | CTF, bug bounty, certificações, relatórios, red team |

---

## Como usar

### Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/trilha-hacker.git

# Abra o arquivo no browser
open index.html
# ou simplesmente arraste o arquivo para o browser
```

Não é necessário servidor, instalação ou configuração.

### GitHub Pages (recomendado)

1. Faça um fork ou crie um repositório com o `index.html`
2. Vá em **Settings → Pages**
3. Em **Source**, selecione a branch `main` e clique em **Save**
4. Após ~1 minuto, o site estará disponível em:

```
https://seu-usuario.github.io/trilha-hacker
```

---

## Estrutura do projeto

```
trilha-hacker/
├── index.html   # Aplicação completa (HTML + CSS + JS inline)
├── LICENSE      # MIT License
└── README.md    # Este arquivo
```

Todo o código vive em `index.html`:

- **CSS** — variáveis de tema, grid de 3 colunas, drawer animado, estados de conclusão
- **JavaScript** — objeto `TOPICS` com os dados, `localStorage` para persistência, lógica do drawer e dos checkboxes
- **HTML** — estrutura de fases e cards, sem templates ou frameworks

---

## Progresso e persistência

O progresso é salvo automaticamente no `localStorage` do browser com a chave `trilha-hacker-v1`. Isso significa:

- O progresso persiste ao fechar e reabrir o browser
- Funciona offline após o primeiro acesso
- O progresso é local — não sincroniza entre dispositivos
- Limpar os dados do site no browser apaga o progresso

---

## Tecnologias

- **HTML5** semântico
- **CSS3** — custom properties, grid, flexbox, `color-mix()`, media queries
- **JavaScript** vanilla (ES2020+) — sem frameworks
- **Google Fonts** — Inter, JetBrains Mono, Barlow Condensed
- **localStorage** — persistência de progresso

---

## Contribuindo

Contribuições são bem-vindas! Se quiser sugerir um tópico novo, corrigir informações ou melhorar o design:

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feat/novo-topico`
3. Faça o commit: `git commit -m 'feat: adiciona tópico de cloud security'`
4. Abra um Pull Request

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

<p align="center">
  Feito com 🖤 para quem quer aprender a pensar como um atacante.
</p>

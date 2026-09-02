const TOPICS = {
  etica:{phase:'00 · Pré-requisito',pVar:'--c-blue',title:'Hacking Ético e Legislação',
    desc:'Antes de qualquer técnica, entenda onde está pisando. No Brasil, o art. 154-A do Código Penal criminaliza invasão de dispositivo sem autorização. O que torna uma atividade legal é autorização escrita com escopo definido. Bug bounty, CTF e laboratórios próprios são os caminhos legais.',
    subs:['Art. 154-A do Código Penal e Lei 12.737/2012 (Carolina Dieckmann)','LGPD e suas implicações para testes de segurança','Diferença entre pentest, red team e bug bounty','Escopo de engajamento e documentação de autorização','Divulgação responsável (responsible disclosure e CVE)','Ética profissional e conflitos de interesse','Leis internacionais (CFAA nos EUA, Computer Misuse Act no UK)']},

  lab:{phase:'00 · Pré-requisito',pVar:'--c-blue',title:'Configurando o Laboratório',
    desc:'Nunca teste em sistemas reais sem autorização. Um lab isolado é o ponto de partida — hypervisor, redes isoladas, snapshots limpos e máquinas vulneráveis intencionalmente.',
    subs:['VirtualBox ou VMware: instalação e configuração de redes host-only','Kali Linux: instalação, update e personalização do ambiente','Snapshots: como criar e restaurar estados limpos','Redes NAT vs Host-Only vs Bridged — quando usar cada uma','Máquinas vulneráveis: Metasploitable, DVWA, VulnHub','Laboratório de AD: DC Windows Server + cliente Windows','Controle de versão de scripts e configurações (Git)']},

  mentalidade:{phase:'00 · Pré-requisito',pVar:'--c-blue',title:'Mentalidade do Hacker',
    desc:'Hacking é uma forma de pensar, não um conjunto de ferramentas. A mentalidade envolve curiosidade sistemática, decomposição de sistemas complexos e persistência diante do desconhecido.',
    subs:['Pensamento adversarial: ver sistemas como atacante','Decomposição de problemas complexos em partes menores','Como aprender de forma eficiente: leitura ativa e hands-on','Documentação pessoal: caderno de notas técnicas (Obsidian, etc.)','Comunidade: fóruns, Discord, conferências (DEF CON, H2HC)','Inglês técnico: leitura de whitepapers e CVEs','Gerenciamento de frustração e aprendizado com falhas']},

  computadores:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Arquitetura de Computadores',
    desc:'CPU, memória RAM, disco, barramento, registradores. Como instruções são executadas ciclo a ciclo. O que é um processo, memória virtual, chamadas de sistema. Sem entender essas camadas, buffer overflows vão parecer magia negra.',
    subs:['CPU: registradores, ALU, pipeline de execução','Memória RAM vs cache vs disco: hierarquia e latências','Endereçamento de memória e espaço de endereço virtual','Stack vs Heap: alocação e ciclo de vida','Syscalls: como o userspace conversa com o kernel','Interrupções e I/O: como periféricos se comunicam com a CPU','Formato de binários: ELF (Linux) e PE (Windows)','Processo de boot: BIOS/UEFI, bootloader, kernel']},

  linux:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Linux: Do Filesystem ao Shell',
    desc:'Hierarquia de diretórios, permissões UNIX, inodes, processos e sinais, redirecionamento e pipes. Use Linux diariamente — não existe atalho.',
    subs:['Hierarquia FHS: /, /etc, /proc, /dev, /var, /tmp, /home','Permissões: chmod, chown, ACLs, SUID, SGID, Sticky bit','Processos: ps, top, signals (kill, SIGTERM, SIGKILL)','Redirencionamento: stdin/stdout/stderr, pipes, tee','Usuários e grupos: /etc/passwd, /etc/shadow, sudo, su','Gerenciamento de pacotes: apt, dpkg, pip, pip3','Cron e serviços: systemd, crontab, at','Networking no Linux: ip, ss, netstat, iptables, nftables','Filesystems: ext4, tmpfs, /proc como FS virtual']},

  logica:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Lógica de Programação',
    desc:'Variáveis, condicionais, loops, funções, recursão, estruturas de dados. O pré-requisito para qualquer linguagem de programação e para entender código malicioso.',
    subs:['Variáveis, tipos primitivos e escopo','Condicionais: if/elif/else, operadores lógicos e relacionais','Loops: for, while, break, continue','Funções: parâmetros, retorno, recursão','Estruturas de dados: listas, dicionários, pilhas, filas','Complexidade de algoritmos (Big O básico)','Depuração: como ler erros e usar debugger','Pseudocódigo e fluxogramas para modelar lógica']},

  python_basico:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Python Básico',
    desc:'Python é a língua franca do hacking: scripts de reconhecimento, exploits, automação, ferramentas. Antes do ofensivo, domine a sintaxe e os conceitos essenciais.',
    subs:['Sintaxe: indentação, strings, f-strings, comprehensions','Tipos: int, str, list, dict, tuple, set','Funções built-in: range, len, enumerate, zip, map','Módulos e pacotes: import, pip, virtualenv','Tratamento de erros: try/except/finally','Leitura e escrita de arquivos: open, with, json, csv','OOP básico: classes, atributos, métodos, herança','Regex: re.search, re.findall, re.sub']},

  so:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Sistemas Operacionais',
    desc:'Conceitos fundamentais de SO que aparecem em exploits, privilege escalation e análise forense: scheduling, memória virtual, IPC e controle de acesso.',
    subs:['Scheduling de processos: preemptivo vs cooperativo','Memória virtual: paginação, segmentação, TLB','Chamadas de sistema (syscalls) e transição kernel/user space','Comunicação entre processos: pipes, sockets, shared memory','Controle de acesso: DAC, MAC, capabilities no Linux','Módulos de kernel e drivers de dispositivo','Containers vs VMs: namespaces e cgroups']},

  windows_basico:{phase:'01 · Fundamentos',pVar:'--c-blue',title:'Windows: Estrutura e Admin',
    desc:'A maioria dos ambientes corporativos roda Windows. Entender sua estrutura é pré-requisito para exploração e privilege escalation em redes reais.',
    subs:['Registro do Windows: hives, chaves, valores relevantes para pentest','Serviços: SCM, criação, permissões, DACLs','Gerenciamento de usuários: net user, net localgroup, lusrmgr','Política de grupo (GPO): estrutura e impacto em segurança','UAC: como funciona e por que importa para PrivEsc','Event Log: eventos de segurança relevantes (4624, 4688, etc.)','PowerShell e cmd.exe: diferenças e uso para pentest','WMI e COM: o que são e por que atacantes os exploram']},

  osi:{phase:'02 · Técnico',pVar:'--c-teal',title:'Modelo OSI e TCP/IP',
    desc:'As 7 camadas do OSI e como mapeiam para TCP/IP real. Endereçamento IP, roteamento, ARP, DHCP. Entender em qual camada cada protocolo opera muda como você pensa em vetores de ataque.',
    subs:['Camadas OSI: função de cada uma e protocolos associados','Modelo TCP/IP: 4 camadas e correspondência com OSI','Endereçamento IPv4: classes, CIDR, subnetting, VLSM','ARP: resolução de endereços e ARP spoofing','DHCP: DORA, rogue DHCP e ataques de starvation','Roteamento: tabelas de roteamento, roteamento estático e dinâmico','NAT: tipos (SNAT, DNAT, PAT) e implicações para pentest','ICMP: tipos, uso em reconhecimento e bloqueio por firewall']},

  protocolos:{phase:'02 · Técnico',pVar:'--c-teal',title:'Protocolos Essenciais',
    desc:'DNS, HTTP/HTTPS, SSH, SMB, FTP, SMTP. Cada protocolo é um vetor potencial — entendê-los em profundidade é entender onde procurar vulnerabilidades.',
    subs:['DNS: consultas recursivas/iterativas, tipos de registro (A, MX, NS, TXT, SRV)','DNS zone transfer, DNS rebinding e DNS cache poisoning','HTTP: métodos, headers, cookies, status codes, Keep-Alive','HTTPS e TLS: handshake, cipher suites, HSTS, certificate pinning','SSH: autenticação por chave pública, port forwarding, tunneling','SMB: autenticação NTLM, shares, null sessions, versões (1/2/3)','FTP: ativo vs passivo, anonymous login, FTP bounce','SMTP/IMAP: cabeçalhos de e-mail, SPF, DKIM, DMARC']},

  wireshark:{phase:'02 · Técnico',pVar:'--c-teal',title:'Análise de Tráfego',
    desc:'Capturar e interpretar pacotes é uma das habilidades mais valiosas do campo. Permite entender como protocolos funcionam na prática, identificar credenciais expostas e detectar anomalias.',
    subs:['Wireshark: interface, filtros de captura vs exibição','Filtros de display: ip.addr, tcp.port, http, dns','Reconstrução de sessões TCP: Follow TCP Stream','Extração de credenciais em texto puro (HTTP, FTP, Telnet)','Análise de handshake TLS: versão, cipher suite, certificado','tcpdump: captura em linha de comando e exportação para pcap','Análise de tráfego SMB: sessões, autenticação NTLM','Detecção de port scans e anomalias de protocolo']},

  firewall:{phase:'02 · Técnico',pVar:'--c-teal',title:'Firewall, NAT e Proxy',
    desc:'Entender como firewalls filtram tráfego e como NAT funciona é fundamental para compreender por que certos ataques funcionam ou falham, e como evitá-los.',
    subs:['iptables: chains (INPUT, OUTPUT, FORWARD), targets, persistência','nftables: sintaxe e equivalências com iptables','Firewalls stateful vs stateless: diferenças práticas','Evasão de firewall: fragmentação, source port spoofing, decoys','Proxy: tipos (SOCKS4/5, HTTP CONNECT), configuração de pivoting','Packet filtering vs Application layer firewall','Zonas DMZ e segmentação de rede','Next-Gen Firewall: deep packet inspection e implicações']},

  vpn:{phase:'02 · Técnico',pVar:'--c-teal',title:'VPN e Tunelamento',
    desc:'VPNs criam canais criptografados entre redes. Entender como funcionam é necessário tanto para usar na segurança ofensiva quanto para contorná-las em ambientes corporativos.',
    subs:['OpenVPN: configuração, certificados e troubleshooting','WireGuard: protocolo moderno, configuração e vantagens','IPsec: IKE, ESP, AH e casos de uso corporativos','SSH tunneling: local, remote e dynamic port forwarding','Chisel e ligolo-ng: tunneling para pivoting em pentest','Split tunneling vs full tunnel: diferenças e implicações','DNS leaks em VPNs: como detectar e explorar']},

  ipv6:{phase:'02 · Técnico',pVar:'--c-teal',title:'IPv6 e Ameaças Modernas',
    desc:'IPv6 está ativo em redes corporativas muitas vezes sem configuração adequada, criando vetores de ataque ignorados por ferramentas e equipes de segurança que focam em IPv4.',
    subs:['Estrutura de endereço IPv6: prefixo, interface ID, tipos (link-local, global)','NDP (Neighbor Discovery Protocol): equivalente ao ARP, vulnerabilidades','Rogue Router Advertisement: redirect de tráfego IPv6','DHCPv6: ataques de starvation e rogue DHCP','Enumeração IPv6: ferramentas e diferenças do IPv4','Túneis de compatibilidade IPv4/IPv6 (6to4, Teredo) como bypass','Firewalls IPv6 mal configurados em redes dual-stack']},

  python:{phase:'03 · Técnico',pVar:'--c-teal',title:'Python Ofensivo',
    desc:'Socket programming para scanners e backdoors. Requests para automatizar ataques web. Scapy para forjar pacotes. A maioria das ferramentas de hacking são scripts Python — entender a biblioteca é entender a ferramenta.',
    subs:['Sockets: TCP/UDP raw, bind, listen, accept, connect','Criação de port scanner do zero sem Nmap','Requests + BeautifulSoup: scraping e automatização de ataques web','Paramiko: automação SSH, execução remota de comandos','Scapy: criação e envio de pacotes arbitrários (ARP, ICMP, TCP)','Pwntools: interação com processos locais e remotos, ROP','Criação de reverse shell simples em Python','Threading e asyncio para ferramentas de alta performance']},

  bash:{phase:'03 · Técnico',pVar:'--c-teal',title:'Bash Scripting',
    desc:'Automação de reconhecimento, loops para força bruta, one-liners para processar saída de ferramentas. grep, awk, sed, xargs e pipes são habilidades que economizam horas em engagements reais.',
    subs:['Variáveis, arrays, quoting e expansão de parâmetros','Condicionais: if/elif, case, operadores de string e numérico','Loops: for, while, until, continue, break','Funções em bash: parâmetros posicionais, return','grep: regex, -v, -r, -l, -o, -P (PCRE)','awk: campos, patterns, actions, processamento de logs','sed: substituição, deleção, endereçamento por linha e regex','xargs e parallel: execução massiva de comandos','One-liners para pentest: extração de IPs, subdomínios, URLs']},

  c:{phase:'03 · Técnico',pVar:'--c-teal',title:'C e Gerenciamento de Memória',
    desc:'Ponteiros, aritmética de ponteiros, alocação dinâmica, stack vs heap, string handling. Sem entender C, buffer overflows e vulnerabilidades de memória são caixas pretas.',
    subs:['Ponteiros: declaração, dereferência, aritmética','Alocação dinâmica: malloc, calloc, realloc, free e memory leaks','Stack frame: como funciona na prática em assembly','Buffer e string functions: gets, strcpy, sprintf — por que são perigosas','Undefined behavior: o que é e por que importa para security','Compilação: gcc, flags de segurança (-fstack-protector, -PIE, -RELRO)','GDB: debugging básico, breakpoints, inspeção de memória','Valgrind: detecção de memory leaks e acessos inválidos']},

  powershell:{phase:'03 · Técnico',pVar:'--c-teal',title:'PowerShell Ofensivo',
    desc:'PowerShell é a ferramenta de administração padrão do Windows e um dos vetores favoritos de atacantes por rodar em memória, ter acesso a .NET e ser difícil de detectar.',
    subs:['Sintaxe básica: cmdlets, pipeline, objetos','Execução remota: Enter-PSSession, Invoke-Command, WinRM','Bypass de execution policy: métodos e detecção','Download e execução em memória (IEX, DownloadString)','Enumeração: usuários, grupos, serviços, registro via PowerShell','PowerView: enumeração de Active Directory','AMSI: o que é, como funciona e técnicas de bypass','Logging de PowerShell: Script Block Logging, Transcription']},

  assembly_intro:{phase:'03 · Técnico',pVar:'--c-teal',title:'Introdução ao Assembly',
    desc:'Você não precisa ser fluente em assembly para começar, mas precisa entender o suficiente para ler disassembly e entender o que acontece na memória quando um exploit é executado.',
    subs:['Registradores x86: EAX, EBX, ECX, EDX, ESP, EBP, EIP','Registradores x64: RAX, RBX, RSP, RIP e convenções de chamada','Instruções fundamentais: MOV, PUSH, POP, ADD, SUB, XOR','Jumps e condicionais: JMP, JE, JNE, JG, JL e flags (EFLAGS)','Stack frames: prólogo (push rbp; mov rbp, rsp) e epílogo','Chamadas de função: CALL, RET e convenção System V ABI','Leitura básica de disassembly no GDB e objdump','Hello World em NASM: entendendo o ciclo compile→link→execute']},

  go_rust:{phase:'03 · Técnico',pVar:'--c-teal',title:'Go / Rust para Ferramentas',
    desc:'Go e Rust são cada vez mais usados para criar ferramentas ofensivas que compilam para binários estáticos sem dependências, tornando o deployment em alvos mais simples.',
    subs:['Go: goroutines para ferramentas concorrentes (scanners, brute force)','Go: criação de reverse shells e C2 simples','Go: compilação cross-platform (GOOS, GOARCH)','Rust: safety e por que importa para exploits','Criação de loaders e stagers em Go','Ofuscação de strings em binários Go/Rust','Comparação com Python: quando usar cada linguagem','Projetos de referência: Sliver C2 (Go), ferramentas da Offensive Security']},

  cripto:{phase:'04 · Segurança',pVar:'--c-purple',title:'Fundamentos de Criptografia',
    desc:'Criptografia simétrica vs assimétrica. Funções hash. Modos de operação. Tudo isso aparece em vulnerabilidades reais — desde senhas armazenadas em MD5 até tokens JWT sem verificação de assinatura.',
    subs:['Criptografia simétrica: AES-CBC, AES-GCM, ChaCha20','Criptografia assimétrica: RSA (geração de chaves, encrypt/decrypt, sign/verify)','Curvas elípticas: ECDSA, Curve25519, ECDH','Funções hash: MD5, SHA-1, SHA-256, SHA-3 — diferenças e uso','Modos de operação: ECB (inseguro), CBC, CTR, GCM','MAC e HMAC: autenticação de mensagens','Forward secrecy: o que é e por que importa','Entropia e geração de números aleatórios: /dev/random vs /dev/urandom']},

  pki:{phase:'04 · Segurança',pVar:'--c-purple',title:'PKI, TLS e Certificados',
    desc:'Como a cadeia de confiança funciona: root CA → intermediate → leaf. O que um certificado X.509 contém. Como o TLS 1.3 handshake acontece. Base obrigatória para ataques MITM e interceptação de tráfego HTTPS.',
    subs:['Estrutura de certificado X.509: campos, extensões críticas','Cadeia de confiança: root CA, intermediate CA, leaf certificate','TLS 1.3 handshake: Client Hello, Server Hello, certificado, Finished','Cipher suites: nomenclatura, forward secrecy, algoritmos inseguros','Certificate Transparency Logs: enumeração de subdomínios','OCSP e CRL: revogação de certificados','Geração de certificados com OpenSSL: self-signed e CA própria','Certificate pinning: o que é, como bypass em apps mobile']},

  hashing:{phase:'04 · Segurança',pVar:'--c-purple',title:'Hashing e Quebra de Senhas',
    desc:'Senhas não deveriam ser armazenadas em texto puro, mas muitas aplicações mal configuradas usam MD5, SHA-1 sem salt ou formatos inseguros. Saber como quebrar hashes é fundamental.',
    subs:['Diferença entre hash (integridade) e derivação de senha (armazenamento)','Salting: por que MD5 sem salt é quebrável em segundos','Funções lentas: bcrypt, scrypt, Argon2 — parâmetros e quando usar','Hashcat: modos de ataque (dicionário, brute force, rule-based, combinator)','John the Ripper: identificação automática de tipo de hash','Rainbow tables: como funcionam e por que salting as neutraliza','Wordlists: rockyou.txt, hashkiller, regras de mutação','Identificação de hash: hashid, hash-identifier']},

  cripto_ataques:{phase:'04 · Segurança',pVar:'--c-purple',title:'Ataques Criptográficos',
    desc:'Vulnerabilidades em implementações de criptografia — desde padding oracle em AES-CBC até weak keys em RSA e ataques de timing. A maioria dos bugs cripto é de implementação, não do algoritmo.',
    subs:['Padding Oracle Attack: como funciona, CBC bit-flipping','ECB mode: por que revela padrões (exemplo do pinguim)','Reuse of nonce em stream ciphers e AES-CTR','RSA: common modulus attack, small exponent, fault attacks','Timing attacks: como diferença de tempo vaza informação','JWT: alg:none, weak secret bruteforce, RS256→HS256 confusion','Hash length extension attack: SHA-1/SHA-256 sem HMAC','Ataque de aniversário: colisões em funções hash']},

  osint:{phase:'05 · Segurança',pVar:'--c-purple',title:'OSINT: Inteligência de Fontes Abertas',
    desc:'Coletar informação sobre alvos sem interagir com eles diretamente. Metadados EXIF, registros públicos, Certificate Transparency, Wayback Machine e análise de perfis em redes sociais.',
    subs:['Metodologia OSINT: define objetivo → identifica fontes → coleta → análise','Reverse image search: Google Lens, TinEye, Yandex','Metadados EXIF em imagens: extração com exiftool','Wayback Machine: recuperar versões antigas de sites e arquivos expostos','Certificate Transparency: crt.sh para enumerar subdomínios','Registros públicos brasileiros: CNPJ, WHOIS, dados de empresas','TheHarvester: coleta automatizada de e-mails, subdomínios, IPs','Maltego: visualização de grafo de relacionamentos OSINT']},

  dorks:{phase:'05 · Segurança',pVar:'--c-purple',title:'Google Dorks e Shodan',
    desc:'Operadores avançados de busca para encontrar arquivos expostos, painéis admin, backups. Shodan e Censys para encontrar serviços expostos na internet.',
    subs:['Operadores Google: site:, filetype:, intitle:, inurl:, intext:, cache:','Dorks para painéis admin: intitle:"admin login", inurl:/wp-admin','Dorks para arquivos sensíveis: filetype:env, filetype:sql, filetype:bak','Google Hacking Database (GHDB): categorias e uso','Shodan: filtros (port:, product:, os:, country:, org:), API','Censys: busca por certificados TLS, ASN, IPv4/IPv6','Fofa, Zoomeye e Onyphe: alternativas ao Shodan','Criação de alertas para monitoramento de exposições']},

  recon:{phase:'05 · Segurança',pVar:'--c-purple',title:'Reconhecimento Ativo (Nmap)',
    desc:'Quando você pode interagir com o alvo: port scanning, OS fingerprinting, banner grabbing, enumeração de serviços. A partir daqui você precisa de autorização — tudo deixa rastro.',
    subs:['Nmap: TCP SYN scan (-sS), TCP connect (-sT), UDP scan (-sU)','Service version detection (-sV) e OS fingerprinting (-O)','Nmap Scripting Engine (NSE): scripts por categoria (vuln, auth, default)','masscan: varredura massiva de internet, comparação com Nmap','Naabu e RustScan: alternativas modernas e mais rápidas','Banner grabbing: netcat, curl, openssl s_client','Enumeração de serviços: SMB (smbclient, enum4linux), FTP, RDP','Identificação de WAF: wafw00f, comportamento de respostas']},

  enum_web:{phase:'05 · Segurança',pVar:'--c-purple',title:'Enumeração de Domínios e DNS',
    desc:'Mapear a superfície de ataque de uma organização pela sua infraestrutura DNS: subdomínios, IPs, provedores de nuvem, serviços expostos.',
    subs:['Zone transfer DNS: dig AXFR — quando funciona e por quê','Enumeração de subdomínios: amass, subfinder, assetfinder','DNS bruteforce: dnsx, puredns com wordlists especializadas','Passive DNS: SecurityTrails, VirusTotal, Shodan histórico','Resolução em massa: httpx para descobrir subdomínios ativos','ASN e CIDR: como mapear todos os IPs de uma organização','Provedores de nuvem: identificação via CNAME (AWS, GCP, Azure)','Subdomain takeover: CNAME apontando para serviço descontinuado']},

  pessoas:{phase:'05 · Segurança',pVar:'--c-purple',title:'OSINT em Pessoas e Empresas',
    desc:'Coleta de inteligência sobre indivíduos e organizações usando fontes públicas. Essencial para spear phishing e engenharia social direcionada.',
    subs:['LinkedIn: mapeamento de organograma, tecnologias usadas, e-mails','Padrões de e-mail corporativo: hunter.io, clearbit, snov.io','Breaches de dados: HaveIBeenPwned, dehashed, snusbase','GitHub: credenciais expostas, infraestrutura, tecnologias internas','Trufflehog e gitrob: varredura de repositórios por secrets','Registros de domínio históricos: WHOIS passivo, emailrep.io','Geolocalização por fotos: análise de metadados e referências visuais','Criação de perfil: matriz de dados coletados e lacunas a preencher']},

  recon_auto:{phase:'05 · Segurança',pVar:'--c-purple',title:'Automação de Reconhecimento',
    desc:'Ferramentas de recon podem ser orquestradas em pipelines que executam descoberta, verificação e triagem de forma automática, escalando o trabalho de um único pesquisador.',
    subs:['Pipelines com amass + subfinder + httpx + nuclei','Recon-ng: framework modular para reconhecimento','Spiderfoot: reconhecimento OSINT automatizado com mais de 200 módulos','Nuclei: templates para detecção de tecnologias e vulnerabilidades','Interlace: paralelização de ferramentas de recon','Webhook e notificações: alertas quando novos subdomínios surgem','Armazenamento de resultados: SQLite, Elasticsearch, Notion','Automação de screenshots: aquatone, gowitness']},

  owasp:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'OWASP Top 10 e Burp Suite',
    desc:'O Burp Suite é o proxy de interceptação padrão do setor. O OWASP Top 10 define as categorias mais críticas. Pratique em aplicações vulneráveis antes de qualquer alvo real.',
    subs:['Burp Suite: interceptação de requisições, Repeater, Intruder, Scanner','Configuração de proxy no browser e interceptação de HTTPS','OWASP Top 10 (2021): as 10 categorias com exemplos práticos','Broken Access Control: IDOR, privilege escalation horizontal/vertical','Security Misconfiguration: headers ausentes, debug mode, default credentials','Vulnerable & Outdated Components: identificação com nuclei, retire.js','DVWA e Juice Shop: ambiente de prática para cada categoria','Ferramentas complementares: ffuf, feroxbuster para directory bruteforce']},

  sqli:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'SQL Injection',
    desc:'SQLi clássico (UNION-based), blind (boolean e time-based), error-based e out-of-band. Como identificar, extrair dados e, em casos específicos, escalar para RCE.',
    subs:['SQLi in-band: UNION SELECT para extração de dados','Identificação: aspas simples, comentários SQL, comportamento de erro','Error-based: extração via mensagens de erro (MySQL, MSSQL, OracleDB)','Boolean-based blind: inferência de dados bit a bit via verdadeiro/falso','Time-based blind: SLEEP(), WAITFOR DELAY para inferência','Out-of-band: DNS e HTTP para exfiltração de dados','Bypass de WAF: encoding, comentários inline, case variation','SQLMap: detecção automática, técnicas, tampers, --os-shell']},

  xss:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'XSS e CSRF',
    desc:'Reflected, Stored e DOM-based XSS. CSRF (forçar ação autenticada). Clickjacking. Como roubar cookies, fazer keylogging e redirecionar para phishing.',
    subs:['Reflected XSS: payload em URL refletido sem persistência','Stored XSS: payload persistido no banco e executado por outros usuários','DOM-based XSS: processado por JavaScript sem tocar no servidor','Bypass de filtros: encoding HTML/JS, tags alternativas, event handlers','CSRF: como forçar requisições autenticadas via HTML/JS malicioso','SameSite cookie: proteção contra CSRF e como bypassar','Clickjacking: iframes transparentes e X-Frame-Options','XSS para roubo de cookies: document.cookie, flags HttpOnly e Secure']},

  api:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'API Hacking e Autenticação',
    desc:'IDOR, broken authentication, JWT manipulation, OAuth misconfigurations. APIs REST e GraphQL têm superfícies de ataque distintas.',
    subs:['IDOR: acesso a objetos de outros usuários por ID previsível','BOLA vs BFLA: diferença entre object-level e function-level','JWT: estrutura (header.payload.signature), alg:none, weak secret','JWT RS256→HS256 confusion: ataque com chave pública como secret','OAuth: authorization code vs implicit, state parameter CSRF','SSRF via webhook: como APIs com callbacks criam vetores internos','Mass assignment: parâmetros não esperados sendo aceitos pela API','GraphQL: introspection, batching, DoS, injection']},

  ssrf_xxe:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'SSRF, XXE e Injeções',
    desc:'Server-Side Request Forgery força o servidor a fazer requisições internas. XXE explora parsers XML vulneráveis. Template Injection executa código no servidor.',
    subs:['SSRF: cloud metadata (AWS 169.254.169.254, GCP), serviços internos','SSRF blind: inferência via timing, DNS interaction (Burp Collaborator)','Bypass de SSRF: redirecionamentos, IPv6, DNS rebinding','XXE: external entity para leitura de arquivos locais','XXE out-of-band: exfiltração via DNS e HTTP','XXE to SSRF: entidade XML apontando para endpoint interno','SSTI: Jinja2, Twig, FreeMarker — identificação e execução de código','Command injection: $(), backticks, operadores | && ; em parâmetros']},

  auth_bypass:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'Bypass de Autenticação',
    desc:'Falhas em mecanismos de autenticação e gerenciamento de sessão que permitem acesso não autorizado sem conhecer a senha.',
    subs:['Default credentials: listas de padrões por fabricante e produto','Brute force: hydra, medusa, ffuf — rate limiting e proteções','Password spraying: uma senha, muitos usuários — evita bloqueio','Session fixation: forçar o uso de um session ID conhecido','Session hijacking: roubo de cookie via XSS ou sniffing','Insecure "Forgot Password": reset tokens previsíveis ou não expirados','Account enumeration: diferença de resposta entre usuário válido e inválido','MFA bypass: SIM swapping, falhas de lógica, backup codes expostos']},

  file_upload:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'Upload e Path Traversal',
    desc:'Upload de arquivos maliciosos e traversal de diretórios são dois vetores que frequentemente levam a RCE ou leitura de arquivos arbitrários.',
    subs:['File upload: bypass de extensão (php.jpg, .phtml, .phar, null byte)','Content-Type bypass: alterar MIME type no Burp','Web shells: PHP, ASPX, JSP — upload e acesso','Path traversal: ../, ..%2f, encoding, double encoding','LFI (Local File Inclusion): /etc/passwd, log poisoning para RCE','RFI (Remote File Inclusion): inclusão de arquivo remoto','LFI to RCE: via /proc/self/environ, PHP session upload progress','Zip slip: traversal via arquivos compactados com paths maliciosos']},

  waf_bypass:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'Bypass de WAF',
    desc:'Web Application Firewalls bloqueiam payloads conhecidos. Técnicas de bypass exploram ambiguidades de parsing entre o WAF e o backend.',
    subs:['Identificação de WAF: wafw00f, comportamento de respostas (403, 406)','Encoding: URL encoding, double encoding, Unicode normalization','Case variation: SeLeCt, --+, comentários SQL inline (/*!SELECT*/)','HTTP smuggling: discrepância entre proxy e backend para bypass','Chunked transfer encoding como vetor de bypass','Header injection: X-Forwarded-For, X-Real-IP para IP whitelisting','JSON vs URL-encoded: trocar Content-Type para evadir regras','Fragmentação de payload em múltiplos parâmetros']},

  graphql:{phase:'06 · Ofensivo',pVar:'--c-amber',title:'GraphQL e WebSockets',
    desc:'GraphQL expõe toda a API via um endpoint único com introspection habilitada por padrão. WebSockets criam canais persistentes com superfícies de ataque específicas.',
    subs:['GraphQL introspection: enumeração do schema completo','Batching attack: múltiplas queries em uma requisição (DoS, brute force)','Injection em argumentos GraphQL: SQLi, SSTI via campos','Autorização em resolvers: IDOR e BFLA específicos do GraphQL','GraphQL subscriptions: abuso de canal de tempo real','WebSocket: sequestro de handshake, injections via mensagens WS','CSWSH (Cross-Site WebSocket Hijacking): CSRF em WebSocket','Ferramentas: InQL para Burp, GraphQL Voyager para visualização']},

  metasploit:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Metasploit Framework',
    desc:'msfconsole, módulos de exploit, payloads, listeners, auxiliary modules. msfvenom para gerar payloads customizados. Entenda o que acontece nos bastidores.',
    subs:['Arquitetura: msfconsole, módulos (exploit, payload, auxiliary, post)','search e use: localizar e selecionar módulos, show options','Payloads: Meterpreter vs shell, staged (/) vs stageless (_)','Listeners: multi/handler — configuração e gerenciamento de sessões','msfvenom: geração de payloads para Windows, Linux, Android, macro Office','Meterpreter: getuid, getsystem, hashdump, upload/download, sysinfo','Módulos auxiliary: scanner de SMB, FTP, SSH — força bruta embutida','Workspace: organização de engagements no Metasploit']},

  privlinux:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Privilege Escalation Linux',
    desc:'SUID/SGID, sudo misconfiguration, cron jobs, kernel exploits, capabilities, path hijacking, LD_PRELOAD. GTFOBins documenta como abusar de binários legítimos.',
    subs:['Enumeração: sudo -l, find / -perm -4000, crontab -l, env','SUID: exploração de binários com bit SUID via GTFOBins','sudo misconfiguration: NOPASSWD, ALL=(ALL), wildcards','Cron jobs: scripts world-writable, PATH relativo, wildcard injection','Kernel exploits: identificação por versão, DirtyCow, PwnKit (CVE-2021-4034)','Linux Capabilities: cap_setuid+ep em Python, Perl, tar','LD_PRELOAD e LD_LIBRARY_PATH: injeção de biblioteca compartilhada','Path hijacking: manipulação de $PATH para execução de binário falso']},

  privwin:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Privilege Escalation Windows',
    desc:'Token impersonation, AlwaysInstallElevated, serviços com DACLs fracas, DLL hijacking, unquoted service paths, SAM dump. LOLBAS documenta binários nativos exploráveis.',
    subs:['Enumeração: whoami /priv, accesschk.exe, winPEAS','SeImpersonatePrivilege: JuicyPotato, PrintSpoofer, RoguePotato','Unquoted service paths: espaço sem aspas permite injeção de executável','Weak service DACL: substituição de binário de serviço','DLL hijacking: DLL não encontrada carregada de path controlável','AlwaysInstallElevated: MSI malicioso instalado como SYSTEM','Credential dumping: SAM via reg save, LSASS com mimikatz/pypykatz','DPAPI: extração de credenciais de browser e apps Windows']},

  ad:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Active Directory',
    desc:'AD é o coração de ambientes corporativos Windows. Kerberoasting, AS-REP Roasting, Pass-the-Hash, Pass-the-Ticket, DCSync, BloodHound para mapear caminhos até Domain Admin.',
    subs:['Estrutura AD: domínio, floresta, GPO, OU, trust relationships','Kerberos: AS-REQ/AS-REP, TGT, TGS — fluxo completo','Kerberoasting: solicitação de TGS para SPNs e quebra offline','AS-REP Roasting: contas sem pre-autenticação Kerberos','Pass-the-Hash: reutilização de hash NTLM sem cracking','Pass-the-Ticket: injeção de ticket Kerberos (Golden/Silver Ticket)','DCSync: replicação de credenciais do Domain Controller (mimikatz)','BloodHound: coleta com SharpHound, análise de grafos, path até DA']},

  post_exp:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Post-Exploitation',
    desc:'Após obter acesso, o objetivo é manter persistência, coletar credenciais, mapear a rede interna e escalar privilégios sem levantar alarmes.',
    subs:['Manutenção de acesso: cronjob, serviço, registro do Windows, WMI subscription','Coleta de credenciais: history bash, .ssh/id_rsa, web configs, browser','Enumeração interna: hosts, serviços, shares, usuários na rede','Captura de tráfego local: tcpdump, Wireshark em pivô','Limpeza de logs: manipulação de /var/log, Windows Event Log','Living off the land: uso de binários nativos para evitar detecção','Exfiltração: DNS, ICMP, HTTPS, canais alternativos','Notas de pentest: o que documentar durante o engagement']},

  pivoting:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Pivoting e Tunelamento',
    desc:'Usar um host comprometido como ponto de passagem para alcançar redes internas não acessíveis diretamente — técnica central em red team e pentest de redes corporativas.',
    subs:['SSH dynamic port forwarding: SOCKS5 proxy via -D','SSH local e remote forwarding: -L e -R com casos de uso','Chisel: TCP/UDP tunneling sobre HTTP(S)','Ligolo-ng: tunneling transparente sem precisar de SOCKS no Metasploit','Proxychains: roteamento de ferramentas através de múltiplos proxies','Metasploit route: adicionar rotas para redes internas via sessão','Double pivoting: encadeamento de pivôs para sub-redes profundas','netsh portproxy: pivoting nativo no Windows sem ferramentas extras']},

  c2:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'C2 Frameworks',
    desc:'Command & Control frameworks gerenciam múltiplos agentes comprometidos com canais de comunicação encriptados e difíceis de detectar.',
    subs:['Cobalt Strike: conceitos, Beacon, malleable C2 profiles','Sliver: alternativa open-source ao Cobalt Strike (Go)','Havoc: C2 moderno com suporte a BOFs','Metasploit como C2: multi/handler, sessões persistentes','Canais de comunicação: HTTP/S, DNS, SMB, ICMP','Malleable profiles: customização de tráfego para evadir detecção','Categorias: staged vs stageless, implants vs shells','Infraestrutura: redirectors, domain fronting, CDN para C2']},

  evasao_av:{phase:'07 · Ofensivo',pVar:'--c-amber',title:'Evasão de AV e EDR',
    desc:'Antivírus e EDRs detectam malware por assinatura, comportamento e heurística. Técnicas de evasão modificam o binário ou o comportamento para evitar detecção.',
    subs:['Detecção por assinatura vs heurística vs comportamento','Obfuscação de payloads: XOR, AES, base64, split strings','Process injection: CreateRemoteThread, QueueUserAPC, NtCreateThreadEx','Hollowing: substituição de código em processo legítimo (process hollowing)','BOF (Beacon Object Files): execução in-process no Cobalt Strike','AMSI bypass: patching em memória, obfuscação, reflection','ETW (Event Tracing for Windows): como funciona e técnicas de bypass','Sandbox evasion: sleep, mouse movement, username checks']},

  phishing:{phase:'08 · Especializado',pVar:'--c-orange',title:'Phishing e Spear Phishing',
    desc:'Phishing genérico vs spear phishing (personalizado com OSINT). Criação de domínios convincentes, páginas de captura, evasão de filtros antispam.',
    subs:['Typosquatting: variantes de domínio (homoglyphs, .com vs .net, prefixos)','Infraestrutura: VPS, domínio de reputação limpa, MX records','SPF, DKIM e DMARC: configuração correta para e-mail passa em filtros','GoPhish: campanhas de phishing com tracking de cliques','Evilginx: proxy reverso que captura credenciais E sessões (bypass MFA)','Landing pages: clonagem com HTTrack, personalização com OSINT','Pretexting por e-mail: contexto convincente baseado em OSINT da vítima','Análise de resultado: taxa de clique, credenciais capturadas, sessions']},

  pretexting:{phase:'08 · Especializado',pVar:'--c-orange',title:'Pretexting e Vishing',
    desc:'Pretexting é criar um cenário fictício para manipular uma pessoa. Vishing (voice phishing) usa chamadas telefônicas. Ambos requerem pesquisa prévia e controle emocional.',
    subs:['Pesquisa prévia: OSINT sobre a vítima, empresa, jargão interno','Scripts de vishing: personificação de TI, fornecedores, auditores','Controle de voz: tom de autoridade, urgência sem agressividade','Caller ID spoofing: ferramentas e limitações legais','Vetores de informação: senhas por telefone, 2FA codes, acesso remoto','Resistência a suspeitas: como recuperar quando a vítima hesita','Documentação de engajamento: o que capturar e como reportar','Ética: diferença entre teste autorizado e crime']},

  physical:{phase:'08 · Especializado',pVar:'--c-orange',title:'Physical Penetration Testing',
    desc:'Tailgating, badge cloning, lock picking, rogue devices. Em red teams reais, o vetor físico é o mais subestimado — e frequentemente o mais efetivo.',
    subs:['Tailgating: seguir pessoas autorizadas sem autenticação própria','RFID cloning: frequências (125kHz LF, 13.56MHz HF), Proxmark3, Flipper Zero','Lock picking: rakes, single pin picking, bumping — teoria e prática','Bypass de portão: loida (latch slide), under-door tools','Rogue devices: LAN Turtle em porta de rede, USB Rubber Ducky','Reconhecimento físico: identificar câmeras, guardas, turnos, pontos cegos','Criação de badge falso: impressão de identidade visual copiada de OSINT','Documentação fotográfica segura: o que registrar durante o teste']},

  osint_social:{phase:'08 · Especializado',pVar:'--c-orange',title:'OSINT Social e Targeting',
    desc:'OSINT direcionado a indivíduos específicos para criar ataques de engenharia social cirúrgicos. Quanto mais específico o ataque, maior a taxa de sucesso.',
    subs:['Mapeamento de alvo: cargo, responsabilidades, autoridades, dores','LinkedIn avançado: inferência de projetos, tecnologias, fornecedores','Footprint de e-mail: padrão corporativo, validação sem enviar e-mail','Breaches como fonte: senhas antigas revelam padrões comportamentais','Mapeamento de relacionamentos: quem aprova, quem delega, quem confia em quem','Timing de ataque: quando enviar o e-mail (segunda 9h, antes de reunião)','Geolocalização de alvo: onde trabalha, quando está no escritório','Contra-OSINT: o que a sua organização expõe involuntariamente']},

  wifi:{phase:'09 · Especializado',pVar:'--c-orange',title:'Wi-Fi Avançado',
    desc:'Captura de handshake WPA2, PMKID attack, Evil Twin, WPS PIN attack. Interface wireless em modo monitor é pré-requisito.',
    subs:['Modo monitor: airmon-ng, iw, verificação de compatibilidade de chipset','airodump-ng: captura de tráfego, identificação de clientes, BSSIDs','Captura de handshake WPA2: aireplay-ng deauth + captura','PMKID attack: captura sem precisar de cliente conectado (hcxdumptool)','Cracking offline: hashcat com wordlists e regras, john the ripper','Evil Twin: hostapd-wpe, criar AP falso com nome idêntico','WPS PIN brute force: reaver, bully — quando WPS está ativo','Rogue AP para captura de credenciais: captive portal com dnsmasq']},

  bluetooth:{phase:'09 · Especializado',pVar:'--c-orange',title:'Bluetooth e BLE',
    desc:'BLE (Bluetooth Low Energy) é ubíquo em IoT e wearables. Permite captura de dados, replay de pacotes e — em dispositivos mal implementados — execução de comandos.',
    subs:['Bluetooth Classic vs BLE: diferenças de protocolo e atacabilidade','BLE: GATT, services, characteristics, descriptors — estrutura','Captura BLE: Wireshark com btlejuice/btlejack, HackRF','Enumeração: btlejuice, BLE scanner apps, gatttool','MITM em BLE: interceptação de pairing inseguro (Just Works)','BlueSnarfing: acesso a arquivos sem autenticação','Replay attack: captura e reenvio de comandos de dispositivos','Ferramentas: Flipper Zero, Ubertooth One, nRF Sniffer']},

  sdr:{phase:'09 · Especializado',pVar:'--c-orange',title:'SDR: Software Defined Radio',
    desc:'Um dongle RTL-SDR (~R$50) deixa você receber frequências de rádio e decodificar sinais. HackRF vai além — permite transmitir.',
    subs:['RTL-SDR: setup, drivers, SDR# / GQRX / SDR++','Conceitos: frequência, modulação (AM, FM, FSK, OOK), largura de banda','ADS-B: decodificação de telemetria de aeronaves (dump1090)','Pagers POCSAG: decodificação de mensagens em texto puro','Controles remotos 433/868MHz: replay attack em portões e alarmes','RDS (Radio Data System): dados ocultos em FM comercial','HackRF: transmissão, jamming controlado, geração de sinais arbitrários','GNU Radio: criação de fluxos de processamento de sinal personalizados']},

  iot:{phase:'09 · Especializado',pVar:'--c-orange',title:'Embedded Systems e IoT',
    desc:'Extrair e analisar firmware com binwalk. Identificar interfaces de debug: UART, JTAG, SPI/I2C para dumpar memória flash. Encontrar credenciais hardcoded e binários vulneráveis.',
    subs:['Metodologia de análise de IoT: surface mapping → firmware → runtime','binwalk: extração de squashfs, cramfs, JFFS2, identificação de arquiteturas','strings: busca de credenciais hardcoded, URLs, chaves em binários','UART: identificação de pinos (TX, RX, GND, VCC) com multímetro','JTAG: uso de OpenOCD para debug e extração de firmware via JTAG','SPI/I2C Flash: dumpar chip de memória com flashrom ou Bus Pirate','Emulação com QEMU: executar firmware de outra arquitetura (MIPS, ARM)','Análise de firmware: Firmwalker, firmware-mod-kit, análise manual de rootfs']},

  rfid_nfc:{phase:'09 · Especializado',pVar:'--c-orange',title:'RFID, NFC e Flipper Zero',
    desc:'RFID é usado em cartões de acesso físico. NFC em pagamentos e smartphones. Flipper Zero consolidou o acesso a essas tecnologias em um dispositivo portátil.',
    subs:['RFID 125kHz (EM4100, HID Prox): clonagem de crachá com Proxmark3','RFID 13.56MHz (MIFARE Classic): vulnerabilidades do CRYPTO1, clonagem','MIFARE Classic: ferramentas (mfcuk, mfoc) e análise de setores','NFC em smartphones: HCE, emulação de cartão, NDEF','Flipper Zero: leitura/escrita de RFID, sub-GHz, IR, Bluetooth','NFC relay attack: extensão do alcance de cartão de crédito','Proteção: cartões RFID blindados, shields de alumínio','Legalidade: diferença entre teste de segurança e uso malicioso']},

  assembly:{phase:'10 · Expert',pVar:'--c-red',title:'Assembly x86/x64 Avançado',
    desc:'Registradores, instruções, convenções de chamada, stack frames, prólogo/epílogo. Sem isso, você não lê um binário desconhecido nem escreve shellcode.',
    subs:['Registradores x64: RAX-R15, RSP, RBP, RIP, RFLAGS — papel de cada um','Convenções de chamada: System V ABI (Linux) e fastcall (Windows)','Instruções de string: MOVS, CMPS, SCAS, LODS, STOS com REP','Instrução CALL e análise do stack frame no GDB/pwndbg','Shellcode: escrita de hello world em assembly, null byte avoidance','Técnicas de shellcode: egg hunting, alphanumeric, polymorphic','SIMD e instruções SSE/AVX: presença em code gerado por compilador','Análise de função: identificar prólogo, epílogo, argumentos, retorno']},

  ghidra_ida:{phase:'10 · Expert',pVar:'--c-red',title:'Ghidra e IDA Pro',
    desc:'Ferramentas de análise estática de binários — decompilação, análise de fluxo de controle, identificação de funções e criação de anotações para entender código sem fonte.',
    subs:['Ghidra: interface, importação de binário, análise automática','Navegação: CodeBrowser, Function Graph, Decompiler view','Renomeação de variáveis/funções: como tornar o pseudocódigo legível','Scripts Ghidra: Python e Java para automação de análise','IDA Pro: diferenças em relação ao Ghidra, vantagens em análise de malware','Binary Ninja: alternativa moderna com API Python rica','x64dbg e OllyDbg: debugging dinâmico de binários Windows','Correlação static+dynamic: usar Ghidra para guiar breakpoints no debugger']},

  malware:{phase:'10 · Expert',pVar:'--c-red',title:'Análise de Malware',
    desc:'Análise estática (strings, imports, entropia) e dinâmica (sandbox, monitoramento de syscalls, conexões de rede). Técnicas de obfuscação e evasão de antivírus.',
    subs:['Ambiente de análise: VM isolada, snapshot, INetSim para simular rede','Análise estática básica: strings, PEview, PEStudio, Detect-It-Easy','Entropy: detecção de packing, UPX, custom packers','Imports e exports de DLL: identificar capacidades pelo IAT','Análise dinâmica: Process Monitor, Process Hacker, Wireshark simultâneos','Sandbox online: ANY.RUN, Cuckoo, Hybrid Analysis','Anti-analysis: timing checks, IsDebuggerPresent, sandbox detection','Análise de macro Office: oledump, olevba, deobfuscação de VBA']},

  exploits:{phase:'10 · Expert',pVar:'--c-red',title:'Desenvolvimento de Exploits',
    desc:'Stack-based buffer overflow, controle de EIP/RIP, shellcode. Proteções modernas: ASLR, DEP/NX, Stack Canaries. Bypass via ROP chains.',
    subs:['Stack buffer overflow: identificar, controlar EIP, offset com pattern_create','Badchars: identificação de bytes que corrompem o payload','Shellcode: geração com msfvenom, ajuste a restrições de bytes','Proteções: ASLR (randomização), NX/DEP (stack não executável), Canary','Return-Oriented Programming (ROP): conceito de gadgets e chains','Ferramentas ROP: ropper, ROPgadget, pwntools ROP class','ret2libc e ret2plt: bypass de NX sem shellcode','Heap exploitation: use-after-free, heap spray, tcache poison (conceitos)']},

  antidebug:{phase:'10 · Expert',pVar:'--c-red',title:'Anti-Debug e Evasão',
    desc:'Técnicas usadas por malware para detectar e dificultar análise — relevantes tanto para quem analisa quanto para quem cria ferramentas ofensivas.',
    subs:['IsDebuggerPresent, CheckRemoteDebuggerPresent — e como bypassar','NtQueryInformationProcess: detecção de debugger via kernel','Timing checks: RDTSC, GetTickCount — detectar slowdown de análise','Self-modifying code: código que se altera em runtime','Anti-VM: CPUID, VMware artifacts, RDTSC timing','Packing e obfuscação: UPX, custom XOR, VM-based protectors (Themida)','TLS callbacks: execução de código antes do entry point — detecção','Patching em memória: como bypassar verificações de debugger via x64dbg']},

  fuzzing:{phase:'10 · Expert',pVar:'--c-red',title:'Fuzzing e Descoberta de Bugs',
    desc:'Fuzzing alimenta um programa com entradas aleatórias ou mutadas para encontrar crashes que indicam vulnerabilidades. É como grandes bugs em browsers e kernels são descobertos.',
    subs:['Conceito de fuzzing: blackbox vs greybox vs whitebox','AFL++: instrumentação de binário, corpus, coverage-guided fuzzing','LibFuzzer: fuzzing in-process em funções específicas','Sanitizers: AddressSanitizer (ASAN), UndefinedBehaviorSanitizer (UBSAN)','Fuzzing de protocolos de rede: Boofuzz, Sulley','Fuzzing de parsers: JSON, XML, imagens — casos famosos','Análise de crash: triage com ASAN output, reprodução mínima','de PoC a CVE: relatório de vulnerabilidade responsável']},

  ctf:{phase:'11 · Expert',pVar:'--c-red',title:'CTF e Plataformas de Prática',
    desc:'CTF é o ambiente de aprendizado mais eficiente para hacking: problemas isolados com objetivo claro, feedback imediato e comunidade de write-ups.',
    subs:['Categorias de CTF: Web, Pwn, Reversing, Crypto, Forensics, Misc','HackTheBox: máquinas activas e retired, metodologia de abordagem','TryHackMe: learning paths guiados, ideal para iniciantes','CTFtime.org: calendário de competições, time rating','picoCTF: nível iniciante/intermediário da Carnegie Mellon','pwn.college: foco em binary exploitation, gratuito da ASU','Write-ups: como ler e como escrever os próprios','Ferramentas CTF: pwndbg, pwntools, ghidra, CyberChef, binwalk']},

  bugbounty:{phase:'11 · Expert',pVar:'--c-red',title:'Bug Bounty',
    desc:'Programas de bug bounty pagam pesquisadores por vulnerabilidades em sistemas reais com escopo definido. Leia relatórios públicos — é o melhor material de estudo disponível.',
    subs:['Plataformas: HackerOne, Bugcrowd, Intigriti, YesWeHack','VDP vs bug bounty: diferença e por que começar por VDP','Leitura de escopo: o que testar, limites, exclusões','Metodologia de recon: subdomain takeover, JS analysis, endpoint discovery','HackerOne Hacktivity: leitura de relatórios públicos como estudo','Triagem de duplicatas: como saber se um bug já foi reportado','Escalonamento de severidade: CVSS, impacto real vs teórico','Como escrever um bom relatório: reprodução, impacto, CVSS, PoC']},

  certs:{phase:'11 · Expert',pVar:'--c-red',title:'Certificações',
    desc:'Certificações provam competência ao mercado. Ordem recomendada: Security+ (fundamentos), eJPT (prática básica), OSCP (padrão ouro do pentest).',
    subs:['CompTIA Security+: fundamentos de segurança, reconhecida globalmente','INE eJPT: certificação prática acessível, boa para primeiro emprego','OSCP (PEN-200): exame de 24h totalmente prático, padrão ouro do mercado','OSWE: especialização em web application exploitation avançado','OSED: especialização em exploit development para Windows','CRTO: red team com Active Directory, Cobalt Strike','CEH: menos prático, mais teórico — valor de mercado no Brasil','Preparação: labs práticos > decorar teoria']},

  relatorio:{phase:'11 · Expert',pVar:'--c-red',title:'Relatórios e Documentação',
    desc:'Um pentest sem relatório não tem valor. Documentar vulnerabilidades de forma clara, com evidências e recomendações acionáveis é o que separa um profissional de um script kiddie.',
    subs:['Estrutura do relatório: sumário executivo, metodologia, achados, conclusão','Sumário executivo: linguagem para gestores, impacto de negócio','Classificação de risco: CVSS v3.1, contexto real vs score teórico','Achado completo: descrição, evidência (screenshot/log), impacto, recomendação','Reprodução: passos exatos para reproduzir a vulnerabilidade','Ferramentas: SysReptor, PlexTrac, Dradis, reportes em LaTeX','Notas durante o engagement: quando e o que capturar em tempo real','Entrega e comunicação: apresentação oral para cliente técnico e executivo']},

  redteam:{phase:'11 · Expert',pVar:'--c-red',title:'Red Team vs Blue Team',
    desc:'Red team simula adversários reais com objetivos específicos. Blue team detecta e responde. Purple team colabora para melhorar ambos. Entender o outro lado melhora cada time.',
    subs:['Diferença entre pentest e red team: objetivos, duração, escopo','TTPs: MITRE ATT&CK como linguagem comum entre times','C2 e persistência: o que red team precisa manter durante o engagement','Threat intelligence: como blue team usa IOCs e TTPs para defender','SIEM: o que loga, o que detecta, o que deixa passar','Threat hunting: procura ativa de comprometimentos que escaparam do SIEM','Purple team exercises: atacar → detectar → melhorar detecção → repetir','Debrief: como red e blue se comunicam após um engagement']},

  pesquisa:{phase:'11 · Expert',pVar:'--c-red',title:'Pesquisa de Vulnerabilidades',
    desc:'Encontrar vulnerabilidades originais em software real exige domínio de análise de código, reversão e fuzzing — e é o topo da carreira em segurança ofensiva.',
    subs:['Análise de patches: diff entre versão vulnerável e corrigida (patch diffing)','Source code review: padrões de vulnerabilidade em C, PHP, Java, Python','Variant analysis: encontrar bugs similares ao CVE recentemente divulgado','Code auditing tools: Semgrep, CodeQL, Joern para análise automatizada','Fuzzing dirigido: identificar parsers e surface attack no código','Reporte de CVE: processo CNA, escrita de advisory, timeline de disclosure','Publicação: como escrever um blog post ou whitepaper técnico','Conferências: submissão de trabalho para DEF CON, Black Hat, H2HC']},
};

// ── PERSISTÊNCIA ──────────────────────────────────────────────────────────
const STORAGE_KEY = 'trilha-hacker-v1';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}
function getDone(id) {
  return new Set(loadState()[id] || []);
}
function setDone(id, set) {
  const s = loadState();
  s[id] = [...set];
  saveState(s);
}

// ── ATUALIZAR CARD DO TÓPICO ──────────────────────────────────────────────
function updateNodeCard(id) {
  const btn = document.querySelector(`.node[data-id="${id}"]`);
  if (!btn) return;
  const t = TOPICS[id];
  const done = getDone(id);
  btn.classList.toggle('done', !!t && done.size === t.subs.length && t.subs.length > 0);
}

function initAllNodes() {
  document.querySelectorAll('.node').forEach(btn => updateNodeCard(btn.dataset.id));
}

// ── DRAWER ────────────────────────────────────────────────────────────────
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('overlay');
const dClose    = document.getElementById('drawerClose');
const dPhase    = document.getElementById('dPhase');
const dTitle    = document.getElementById('dTitle');
const dDesc     = document.getElementById('dDesc');
const dSubs     = document.getElementById('dSubs');
const dProgFill = document.getElementById('dProgFill');
const dProgText = document.getElementById('dProgText');
let activeNode = null;
let currentId  = null;

function renderProgress(id) {
  const t = TOPICS[id];
  if (!t) return;
  const done = getDone(id);
  const pct = t.subs.length ? (done.size / t.subs.length * 100) : 0;
  dProgFill.style.width = pct + '%';
  dProgText.textContent = `${done.size}/${t.subs.length} concluídos`;
}

function openDrawer(id) {
  const t = TOPICS[id];
  if (!t) return;
  currentId = id;
  drawer.style.setProperty('--pc', `var(${t.pVar})`);
  dPhase.textContent = t.phase;
  dTitle.textContent = t.title;
  dDesc.textContent  = t.desc;

  const done = getDone(id);
  dSubs.innerHTML = t.subs.map((s, i) => {
    const ck = done.has(i);
    return `<div class="sub-item${ck ? ' sub-done' : ''}" data-idx="${i}">
      <button class="sub-check${ck ? ' checked' : ''}" aria-label="Marcar como concluído">
        <svg viewBox="0 0 10 8" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1,4 3.5,6.5 9,1"/>
        </svg>
      </button>
      <span class="sub-text">${s}</span>
    </div>`;
  }).join('');

  renderProgress(id);

  dSubs.querySelectorAll('.sub-check').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.closest('.sub-item').dataset.idx);
      const set = getDone(currentId);
      if (set.has(idx)) set.delete(idx); else set.add(idx);
      setDone(currentId, set);
      const item = btn.closest('.sub-item');
      btn.classList.toggle('checked', set.has(idx));
      item.classList.toggle('sub-done', set.has(idx));
      renderProgress(currentId);
      updateNodeCard(currentId);
    });
  });

  drawer.classList.add('open');
  overlay.classList.add('open');
}

function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  if (activeNode) { activeNode.classList.remove('active'); activeNode = null; }
  currentId = null;
}

document.querySelectorAll('.node').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    if (activeNode === btn) { closeDrawer(); return; }
    if (activeNode) activeNode.classList.remove('active');
    activeNode = btn;
    btn.classList.add('active');
    openDrawer(id);
  });
});

dClose.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// Inicializa estados salvos ao carregar a página
initAllNodes();
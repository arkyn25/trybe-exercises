# O que vamos aprender?
Nosso primeiro módulo te ensinará tudo que você precisa saber para iniciar sua carreira no mundo do desenvolvimento Web, virando uma pessoa preparada para os módulos de Front-end e Back-end. Vamos te guiar, etapa a etapa, por toda essa jornada!

# Dividimos a introdução em quatro partes:

Pra começar, você vai estudar um pouco sobre um famoso tipo de sistema operacional chamado UNIX . Vamos colocar a mão na massa fazendo comandos no terminal.
Depois de entender como os comandos funcionam e de já ter criado seus primeiros scripts, você vai aprender a usar o Git para guardá-los de forma segura. Além disso, você também entenderá o que é a Internet e como ela funciona.
Então, começaremos a parte mais divertida: o desenvolvimento web. Aqui você vai aprender a estruturar documentos HTML , estilizá-los com o CSS e criar comportamentos customizados com o JavaScript !
Após esse primeiro ciclo de aprendizado, você aprenderá sobre como criar sites responsivos e com CSS elegante e eficiente.
Aprenderá também a como utilizar o JavaScript em sua plenitude, utilizando recursos avançados como HOF , Código assíncrono , Testes unitários entre outras coisas incríveis!

# Parte I - Criação de arquivos e diretórios

- Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .
- Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.
- Crie um arquivo de texto com o nome trybe.txt .
- Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
- Renomeie o arquivo trybe.txt .
- Dentro de unix_tests , crie um novo diretório chamado backup .
- Mova o arquivo trybe_backup.txt para o diretório backup .
- Dentro de unix_tests , crie um novo diretório chamado backup2 .
- Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
- Apague a pasta backup .
- Renomeie a pasta backup2 para backup .
- Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
- Apague o diretório backup .
- Limpe o terminal.
- Para os exercícios, 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
- Mostre na tela as 5 primeiras skills do arquivo skills.txt .
- Mostre na tela as 4 últimas skills do arquivo skills.txt .
- Apague todos os arquivos que terminem em .txt .





Parte II - Manipulação & Busca
Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
Mostre todo o conteúdo do arquivo countries.txt na tela.
Mostre o conteúdo de countries.txt , página por página, até encontra a Zambia .
Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia .
Busque por Brazil no countries.txt .
Busque novamente por brazil , mas agora utilizando o lower case .
Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.
Busque pelas frases que não contenham a palavra fox .
Conte o número de palavras do arquivo phrases.txt .
Conte o número de linhas do arquivo phrases.txt .
Crie os arquivos empty.tbt e empty.pdf .
Liste todos os arquivos do diretório unix_tests .
Liste todos os arquivos que terminem com txt .
Liste todos os arquivos que terminem com tbt ou txt .
Acesse o manual do comando ls .

----------------------------------------------------------------------

# Considere o arquivo nomes.txt para os exemplos a seguir
# Seu conteúdo inicial é:
Ana
Maria
João

# O > redireciona a saída padrão para um arquivo, sendo assim 
# caso haja algum conteúdo no arquivo, ele será substituído

cat > nomes.txt
# Digite o nome "Amanda" e encerre o cat (Ctrl + D)

cat nomes.txt
# Resultado
Amanda

# O >> anexa a saída padrão a um arquivo. Sendo assim, ele adiciona 
# o que for digitado ao final do arquivo em questão

cat >> nomes.txt
# Digite o nome "Fernanda", depois `enter` e o nome "Fabiano", e encerre o cat (Ctrl + D)

cat nomes.txt
# Resultado
Amanda
Fernanda
Fabiano

# O | canaliza a saída do primeiro comando para a entrada do segundo,
# dessa forma conseguimos realizar comandos de forma sucessiva

# Considere que queremos uma lista com todos os nomes que contenham
# a letra "F" e que nosso resultado esteja em ordem alfabética
# Para isso podemos realizar o comando abaixo

grep F nomes.txt | sort
# Resultado
Fabiano
Fernanda

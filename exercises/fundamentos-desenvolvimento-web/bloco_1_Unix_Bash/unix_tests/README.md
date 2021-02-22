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

// Fluxo de dados no Redux
// O gif abaixo resume todas partes e como elas se comunicam para funcionamento do Redux com React. Basicamente, segue-se os seguintes passos:
// Um Store é criado para armazenar todos o estado da aplicação;
// O Store é disponibilizado através do Provider para todos os componentes da aplicação;
// Os componentes usam o connect para conectarem-se ao Store ;
// As pessoas que utilizam a aplicação interagem com ela e disparam eventos;
// Estes eventos têm o nome de Actions e são enviadas ao Store através de um dispatch ;
// Os Reducers recebem essas Actions e alteram o estado da aplicação (criando um novo estado) e salvando no Store ;
// Os componentes conectados ao Store "ouvem" estas mudanças e atualizam a View (visualização).

<a href="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/front-end/redux/react-with-redux-part-1/fluxo-de-dados-redux-92a51aef2f2c70a9c270ae30f6382a71.gif"></a>
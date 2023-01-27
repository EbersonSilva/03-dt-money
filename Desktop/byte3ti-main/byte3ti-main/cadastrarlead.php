<?php
	
//Definições de Acesso ao Banco de Dados 
	
$host = "localhost"; /* Servidor */
$dbusername = ""; /* Usuário */
$dbpass = ""; /* Senha de Usuário */
$dbname = ""; /* Nome do Banco de Dados */

//Realizar Conexão

$conn = new mysqli($host, $dbusername, $dbpass, $dbname);

if(mysqli_connect_error()){
    die('Connection error'. mysqli_connect_error() );
}else{
    echo "";
}

// Mudar Caracteres para utf8
mysqli_set_charset($conn,"utf8");

//Capturar Dados do Formulário de Cadastro / Definir Variáveis

$nomecompleto  = $_POST['nome'] . ' ' . $_POST['sobrenome'];
$email  = $_POST['email'];
$whatsapp  = $_POST['whatsapp'];


//Selecionar / Verificar se os dados informados já existem na tabela
$dupesql = "SELECT * FROM nome_da_tabela WHERE email = '$email' AND whatsapp = '$whatsapp'";
$duperaw = mysqli_query($conn, $dupesql);


/* Se o cadastro já existe */
if (mysqli_num_rows($duperaw) > 0) {
  echo '
    <script>
        alert("E-mail ou Whatsapp já existente!");
        window.location.href = "https://steticapelli.com.br/index.html";
    </script>'; /* Exibir caixa de mensagem "cadastro já existente" */

/* Se o cadastro não existe */
} else {
    
    /* Inserir novo cadastro na tabela */
    $sql = "INSERT INTO nome_da_tabela (nomecompleto, email, whatsapp) VALUES ('$nomecompleto', '$email', '$whatsapp')";
    if (mysqli_query($conn, $sql)) {
        echo '
            <script>
                alert("Inscrição efetuada com sucesso!");
                window.location.href = "https://steticapelli.com.br/index.html";
            </script>'; /* Exibir caixa de mensagem "cadastro efetuado" e retornar para a URL "href" */
        
        mysqli_close($conn);

/* Se o sistema de cadastro não funcionar" */
    } else {
        echo '
            <script>
                alert("Erro ao efetuar inscrição!");
                window.location.href = "https://steticapelli.com.br/index.html";
            </script>'; /* Exibir caixa de mensagem "cadastro efetuado" e retornar para a URL "href" */
    }

}

?>
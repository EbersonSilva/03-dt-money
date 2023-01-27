<?php
// Definir Variáveis

$nome  = $_POST['nome1'];
$email  = $_POST['email1'];
$whatsapp  = $_POST['whatsapp1'];


// Definir Corpo E-mail
$arquivo = "
<style type='text/css'>
body {
margin:0px;
font-family:Verdane;
font-size:12px;
color: #666666;
}
a{
color: #666666;
text-decoration: none;
}
a:hover {
color: #FF0000;
text-decoration: none;
}
table {
	padding: 5px;
	border: solid 1px #ccc;
	background-color: #fff;
	font-size: 14px;
	font-family: sans-serif;
}
</style>
  <html>
	  <table width='700' border='0' cellpadding='5' cellspacing='1' bgcolor='#fff'>
		  <tr>
			<td>
<tr>
			   <td width='500'>Nome:$nome</td>
			  </tr>
			  <tr>
				<td width='320'>E-mail:<b>$email</b></td>
   </tr>
	<tr>
				<td width='320'>Telefone:<b>$whatsapp</b></td>
			  </tr>
			  <tr>
				<td width='320'>Mensagem: Estou solicitando uma ligação de um especialista Steticapelli.</td>
			  </tr>

		  </td>
		</tr>
	  </table>
  </html>
";

//enviar

  // Definir Email para quem será enviado os dados do formulário
  $emailenviar = "contato@steticapelli.com.br";
  $destino = $emailenviar;
  $assunto = "Solicitação de contato - $nome";

  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
      
  $headers .= "From: $email"."\r\n". 
	"X=Mailer:PHP/".phpversion();

// E-mail que receberá a resposta quando se clicar no 'Responder' de seu leitor de e-mails
$headers .= "Reply-To: $email\n";

/* Fazer envio" */
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  
/* Se o e-mail for enviado com sucesso" */ 
  if($enviaremail){
    $mgm = "ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
      echo '
        <script>
          alert("Solicitação enviada com sucesso!");
          window.location.href = "https://steticapelli.com.br/index.html";
        </script>'; /* Mostrar mensagem de que o email foi enviado e retornar para a URL "href" */ 

  echo " <meta http-equiv='refresh' content='10;URL=index.html'>";
  } 
  
/* Se der erro ao enviar" */
  else {
    $mgm = "ERRO AO ENVIAR!";
      echo '
        <script>
          alert("Não foi possível enviar sua solicitação!");
          window.location.href = "https://steticapelli.com.br/index.html";
        </script>'; /* Mostrar mensagem de erro e retornar para a URL "href" */ 
  }
?>
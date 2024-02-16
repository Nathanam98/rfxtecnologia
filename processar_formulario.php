<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Captura os dados do formulário
  $nome = $_POST["floatingNome"];
  $email = $_POST["floatingEmail"];
  $telefone = $_POST["floatingTelefone"];

  // Validação de e-mail
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Adicione lógica para lidar com e-mails inválidos
    die("E-mail inválido");
  }

  // Configuração do e-mail
  $destinatario = "nathanalvesmelo98@gmail.com"; // Substitua pelo seu endereço de e-mail
  $assunto = mb_encode_mimeheader("Novo Formulário de Contato", "UTF-8");

  // Mensagem de e-mail
  $mensagem = "Nome: $nome\n";
  $mensagem .= "Email: $email\n";
  $mensagem .= "Telefone: $telefone\n";

  // Proteção contra injeção de cabeçalho
  $headers = "From: seu@email.com" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Envio do e-mail usando a função mail
  if (mail($destinatario, $assunto, $mensagem, $headers)) {
    // Redirecionamento após o envio do e-mail (opcional)
    header("Location: obrigado.html"); // Substitua pelo seu URL de página de agradecimento
    exit();
  } else {
    echo "Falha ao enviar o e-mail.";
  }
}
?>

<?php
// Permite requisições de qualquer origem (CORS Bypass)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: text/plain");

// Responde imediatamente a requisições de preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Captura o corpo da requisição enviada pelo frontend
$inputData = file_get_contents('php://input');

$ch = curl_init("https://mlvoca.com/api/generate");

// Configura o cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $inputData);
// Opcional: Define um User-Agent para evitar bloqueios bobos de Cloudflare
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
// Passamos o content-type exato
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

// Para suportar o Streaming em tempo real
curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($curl, $data) {
    echo $data;
    if (ob_get_level() > 0) {
        ob_flush();
    }
    flush();
    return strlen($data);
});

// Executa e fecha
curl_exec($ch);
if (curl_errno($ch)) {
    echo json_encode(['error' => curl_error($ch)]);
}
curl_close($ch);
?>

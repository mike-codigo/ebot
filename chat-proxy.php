<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: text/event-stream");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$inputData = file_get_contents('php://input');
$requestData = json_decode($inputData, true);

$apiKey = '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';

$groqData = [
    'messages' => [
        [
            'role' => 'user',
            'content' => $requestData['prompt'] ?? ''
        ]
    ],
    'model' => 'openai/gpt-oss-120b',
    'temperature' => 1,
    'max_completion_tokens' => 8192,
    'top_p' => 1,
    'stream' => true,
    'reasoning_effort' => 'medium',
    'stop' => null
];

$ch = curl_init("https://api.groq.com/openai/v1/chat/completions");

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($groqData));
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

curl_setopt($ch, CURLOPT_WRITEFUNCTION, function($curl, $data) {
    echo $data;
    if (ob_get_level() > 0) {
        ob_flush();
    }
    flush();
    return strlen($data);
});

curl_exec($ch);
if (curl_errno($ch)) {
    echo "data: " . json_encode(['error' => curl_error($ch)]) . "\n\n";
}
curl_close($ch);
?>

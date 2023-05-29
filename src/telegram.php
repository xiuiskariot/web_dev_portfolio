<?php
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$token = "6251882819:AAE0y4FsJALvcO9ISUOxgPua4ayw1tzEwEU";
$chat_id = "-691587049";
$arr = [
	"Имя клиента: " => trim(strip_tags($_POST['name'])),
	"Телефон клиента: " => trim(strip_tags($_POST['email'])),
	"Email клиента: " => trim(strip_tags($_POST['msg'])),
];

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b>".$value."%0A"
}

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $send = fopen("https://api.telegram.org/bot{$token}/POST")

$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";
$proxy = "67.154.111.452:3128";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);

// url на который осуществляется отправка
// тестового запроса работает через https
// поэтому нужно добавить флаги для работы с ssl
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

// Подключение к прокси серверу
curl_setopt($ch, CURLOPT_PROXY, $proxy);

// если требуется авторизация
// curl_setopt($ch, CURLOPT_PROXYUSERPWD, $proxyauth);

// отправка запроса
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);
?>
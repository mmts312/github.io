<?php

if($_POST){
    echo "HTMLからPOST送信を受け付けました";
}else{
    echo "HTMLからのPOST送信の受信に失敗しました"
}

// 連想配列をつくる。フォームのname属性を使って格納
$form_data = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
    'message' => $POST['message']
];

// echo "こんにちは、".htmlspecialchars($form_data['name'])."さん！<br>";
// echo "以下の内容で送信します。よろしいですか？<br>";
// echo "メールアドレス：".htmlspecialchars($form_data['email'])."<br>";
// echo "メッセージ：".nl2br(htmlspecialchars($form_data['message']));

?>
<?php

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$project_name = $_POST['project'];
$utm_campaign = $_POST['utm_campaign'];
$utm_medium = $_POST['utm_medium'];
$utm_source = $_POST['utm_source'];

$url="https://netbiz.wufoo.com/api/v3/forms/zw3amcn135re2t/entries.json";

$data='Field1='.$name.'&Field3='.$email.'&Field10='.$mobile.'&Field14='.$project_name.'&Field18='.$mobile.'&Field8='.$utm_campaign.'&Field7='.$utm_medium.'&Field5='.$utm_source;


$curl = curl_init($url.'?sort=EntryId&sortDirection=DESC');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_USERPWD, 'NSK6-S449-8M7C-LYOK:footastic');
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);                          
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);                           
curl_setopt($curl, CURLOPT_USERAGENT, 'Wufoo Sample Code');

curl_setopt($curl, CURLOPT_POST, 1);

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($curl);
$resultStatus = curl_getinfo($curl);
echo $response;
header('Location: https://ruparelpanache.in/thankyou.php');
exit();



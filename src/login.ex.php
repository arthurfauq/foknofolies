<?php
session_start();

require __DIR__ . '/vendor/autoload.php';
require('functions.php');

$fb = new \Facebook\Facebook([
  'app_id' => '',
  'app_secret' => '',
  'default_graph_version' => 'v2.2',
]);

$helper = $fb->getJavaScriptHelper();

try {
  $accessToken = $helper->getAccessToken();
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  header('Location: index.php');
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  header('Location: index.php');
  exit;
}

if (!isset($accessToken)) {
  header('Location: index.php');
  exit;
}

try {
  $response = $fb->get('/me', $accessToken);
} catch(\Facebook\Exceptions\FacebookResponseException $e) {
  header('Location: index.php');
  exit;
} catch(\Facebook\Exceptions\FacebookSDKException $e) {
  header('Location: index.php');
  exit;
}

$me = $response->getGraphUser();
checkuser($me->getName());

$_SESSION['FULLNAME'] = $me->getName();

header('Location: index.php');
exit();
?>

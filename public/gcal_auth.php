putenv('GOOGLE_APPLICATION_CREDENTIALS=config/HEC-Calendar-19b92e192af4');

$client = new Google_Client();
$client->useApplicationDefaultCredentials();



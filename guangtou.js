/*
Quantumult X Script

[rewrite local]
#光头院长 Unlock(by Jerry)
^https?:\/\/bbb\.ddly666\.top\/wp-json\/wp\/v2\/posts url script-response-body guangtou.js

[mtim]
hostname=bbb.ddly666.top,
*/

let obj = JSON.parse($response.body);

obj["excitationAd"]="0";

$done({body:JSON.stringify(obj)});
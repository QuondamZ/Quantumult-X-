/*
Quantumult X脚本

[rewrite local]
#朗易思听 Unlock(by Jerry)
^https?:\/\/sapi\.beingfine\.cn\/v1\/UserLaunchAppReport url script-response-body langyisiting.js
[mtim]
hostname=sapi.beingfine.cn
*/

let obj = JSON.parse($response.body);

obj.data_body.privileges.lrc_unlimited_online_playback["expire_date"]=1800000000000;
obj.data_body.privileges.wordroot["expire_date"]=1800000000000;
obj.data_body.privileges.collins["expire_date"]=1800000000000;
obj.data_body.privileges.lrc_unlimited_download["expire_date"]=1800000000000;
obj.data_body.privileges.wordderive["expire_date"]=1800000000000;
obj.data_body.user_status["dl_quota"]=999;
obj.data_body.user_status["upload_count"]=1;
obj.data_body.user_status["user_has_preferences"]=1;
obj.data_body.privileges.lrc_unlimited_online_playback["granted"]=1;
obj.data_body.privileges.wordroot["granted"]=1;
obj.data_body.privileges.collins["granted"]=1;
obj.data_body.privileges.lrc_unlimited_download["granted"]=1;
obj.data_body.privileges.wordderive["granted"]=1;

$done({body:JSON.stringify(obj)});
/*
Quantumult X脚本

[rewrite_local]
#西窗烛 Unlock Vip (by Jerry)
^https?:\/\/avoscloud\.com\/1\.1\/users\/me url script-response-body xichuangzhu.js
[mitm]
hostname=avoscloud.com,
*/
let obj = JSON.parse($response.body);
obj["membership"]=true;
obj["lifetimeMembersip"]=true;
$done({body:JSON.stringify(obj)});
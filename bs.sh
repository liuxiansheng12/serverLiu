fileName=public

zip -q -r ${fileName}.zip ${fileName}

echo 密码：1996L@lsz.0
scp ./${fileName}.zip root@116.62.144.18:~/node_demo/serverLiu 

rm -rf ${fileName}.zip

echo 密码：1996L@lsz.0
ssh -tt root@116.62.144.18<<EOF
cd node_demo
cd serverLiu
rm -rf ${fileName}
unzip ./${fileName}.zip
rm -rf ${fileName}.zip
EOF
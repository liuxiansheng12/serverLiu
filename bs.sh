fileName=public

zip -q -r ${fileName}.zip ${fileName}

scp ./${fileName}.zip root@116.62.144.18:~/node_demo/serverLiu 

rm -rf ${fileName}.zip

ssh -tt root@116.62.144.18<<EOF
cd node_demo
cd serverLiu
rm -rf ${fileName}
unzip ./${fileName}.zip
rm -rf ${fileName}.zip
EOF
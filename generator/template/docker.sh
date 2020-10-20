#! /bin/bash
project='<%= name %>'
currentBranch=`git branch | awk  '$1 == "*"{print $2}'`
content='feat'

echo "----------------------------------"
echo "请选择本次要发布的内容类型:"
echo "(0) bug"
echo "(1) feat"
echo "----------------------------------"
read input

case $input in
    0)
    content=bug;;
    1)
    content=feat;;
    9)
    exit;;
esac

curl "http://10.8.8.253:5097/api/v1/notice?project=${project}&branch=${currentBranch}&type=${content}"
echo "已发送部署请求"

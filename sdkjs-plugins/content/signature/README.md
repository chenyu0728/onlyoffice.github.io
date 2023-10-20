## Overview

OnlyOffice 签章插件

拷贝 signature 文件夹至 docker 环境的/var/www/onlyoffice/documentserver/sdkjs-plugins 目录下

```shell
#拷贝文件到Docker环境
docker cp docker-c4444:/var/www/onlyoffice/documentserver/sdkjs-plugins/
重启服务
docker exec docker-c4444 sudo supervisorctl restart ds:docservice
docker exec docker-c4444 sudo supervisorctl restart ds:convert
```

OnlyOffice Api 文档
https://api.onlyoffice.com/docbuilder/textdocumentapi

OnlyOffice Plugin 文档
https://api.onlyoffice.com/plugin/basic

```shell
sudo docker run -it attemper/attemper-web:1.0.0
sudo docker run -it attemper/executor:1.0.0
sudo docker run -it attemper/scheduler:1.0.0
```

```
sudo docker run --net host -e JAVA_OPTS="-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://xxx:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://xxx:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false" attemper/attemper-web或executor或scheduler:1.0.0

sudo docker run --net host -e JAVA_OPTS="-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://127.0.0.1:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://127.0.0.1:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false" attemper/attemper-web:1.0.0
sudo docker run --net host -e JAVA_OPTS="-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://127.0.0.1:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://127.0.0.1:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false" attemper/executor:1.0.0
sudo docker run --net host -e JAVA_OPTS="-Xms1024m -Xmx2048m --spring.datasource.hikari.first.jdbc-url=jdbc:mysql://127.0.0.1:3306/attemper?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false --spring.datasource.hikari.second.jdbc-url=jdbc:mysql://127.0.0.1:3306/log?allowMultiQueries=true&characterEncoding=UTF-8&useSSL=false" attemper/scheduler:1.0.0
```
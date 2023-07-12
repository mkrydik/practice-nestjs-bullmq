# Practice NestJS + BullMQ

NestJS に BullMQ を組み合わせてジョブキューを実現するサンプル。

## 予め Redis をインストールして起動する

```bash
$ brew install redis

$ redis-cli --version
redis-cli 7.0.12
$ redis-server --version
Redis server v=7.0.12 sha=00000000:0 malloc=libc bits=64 build=a11d0151eabf466c

$ redis-server
```

## NestJS サーバを起動する

```bash
$ npm install
$ npm run start:dev

# NestJS サーバにアクセスすることで Queue がジョブを登録し Worker による処理が開始される
$ curl http://localhost:3000/
```

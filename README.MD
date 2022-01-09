### Docker

```
docker run --rm --interactive --tty --volume $PWD:/app -w /app node
```

### Start Node Application

```
npm init -y
```

### Add typescript

```
npm i -D typescript @types/node
```

### Add Eslint

```
npm i -D eslint
```

### Init Eslint

```
node_modules/.bin/eslint --init
```

### Add Jest

```
npm i -D jest @types/jest ts-jest
```

### Init Jest

```
node_modules/.bin/jest --init
```

### Run test

```
npm run test
```
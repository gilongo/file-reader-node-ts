# NodeJS File Reader

NodeJS application written in Typescript that reads files from local path or URL and returns:

- Number of words in file;
- Number of letters in file;
- Number of whitespaces in file;
- Number of words that repeats more than 10 times and number of times that repeats.

## Get Started

Make sure to have the following sofwtare installed on your PC:

- Docker Engine v26.1.4
- Node v18.4.1
- GNU Make v4.4.1

First of all create a `.env` file in root folder that contains:

```env
HOST=localhost
PORT=3000
TIMES=10
```

To start the project, go to the / folder and run:

```bash
make compose-up
```

It will create an image and run it in a conteinerized environment.
The up should be up and runnning at http://localhost:3000/.

To start using the app make a <strong>POST</strong> request at `/api/files/read` with the following body:

```json
{
  "path": "url or local path"
}
```

Below there are a couple of URL to test the application.
To test it with a local file, modify the file "test.txt" inside the "files" folder, or create a txt file in it.

## Project Structure

```
.
├── src
│   ├── contexts
│   │   └── FileReaderContext.ts
│   ├── routes
│   │   └── fileRouter.ts
│   ├── services
│   │   └── FileReaderService.ts
│   ├── strategies
│   │   ├── LocalFileReader.ts
│   │   └── URLFileReader.ts
│   ├── utils
│   │   ├── stringCounter.ts
│   │   └── stringValidation.ts
│   └── index.ts
├── docker-compose.yml
├── Dockerfile
├── Makefile
├── package.json
├── README.md
├── tsconfig.json
├── .nvmrc
└── .env
```

## Project Description

I've decided to use the Strategy pattern to determine whether the path sent in input is and URL or local path and then use the same method "read" from the interface "FileReaderStrategy", that based on the Context does a fetch or simply reads from a buffer.

## URLs

- Lorem Ipsum text: https://gist.githubusercontent.com/EdwardRayl/3436572afde8ce9e3faf5b7b95356a49/raw/6b25895fce480713560829dec31ac8220ffe5272/gists.txt
- Generic Text: https://raw.githubusercontent.com/webcomponents/URL/master/urltests.txt

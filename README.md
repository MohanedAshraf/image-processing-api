<h1 align="center"> Image Processing API</h1>
<div align="center">
</div>

<p align='center'> <b>Resize Your app in a Second  </b> </p>


## Table of contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Run Locally](#run-locally)
- [Endpoints](#endpoints)


## Features

This web app consists of a basic features/functionalities of the app

- Review and Resize your image
- Resize with any width an height


## Technologies

|    |
| ---------- |
| NodeJs       |
| Express   |
| Sharp    | 
| Typescript    | 
| Jasmine|
| eslint & prettier     |

## Installation

1- Clone the repo

```
$ git clone https://github.com/MohanedAshraf/image-processing-api.git
```

2- Install server dependencies

```
$ npm install
```


## Run Locally

You can start the app in development:

```
$ npm start dev
```

To Test the app:

```
$ npm run test
```
To Run in production mode:

```
$ npm run start
```

For transpile TS to JS:

```
$ npm run build
```

For Linting and fixing:

```
$ npm run lint
$ npm run lint:f
```


## Endpoints

To get existing Image you need to pass one of images name in assets/images as filename.

```
/api/image?filename=fjord
```

To resize an Image you need to pass one of images name in assets/images as filename along side width and height you wish to be resized to , width and height should be postive and together.

```
/api/image?filename=fjord&width=200&height=200
```


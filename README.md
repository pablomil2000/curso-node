# Curso Node JS![App Screenshot](https://proximahost.es/blog/wp-content/uploads/2022/12/Node.JS-1.jpg)

## Tecnologias usadas

**Cliente:** JavaScript, Express

**Server:** Node

## Contenido del curso

    1º Fundamentos de NodeJS
    2º Express
    3º Crear Api rest
    4º MVC
    5º Coneccion MySQL

## Demo Clase 3

La clase 3 cuenta con una demo en: https://api-rest-deploy-dev-pablo.4.us-1.fl0.io

## Referencias API

### API: https://api-rest-deploy-dev-pablo.4.us-1.fl0.io/movies

#### Get all movies

```http
  GET /movies
```

#### Get a movie by id

```http
  GET /movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get movies by genre

```http
  GET /movies?genre=${id}
```

| Parameter | Type   | Description                                                    |
| :-------- | :----- | :------------------------------------------------------------- |
| `genre`   | `enum` | **Required**. 'Action', 'Comedy', 'Drama', 'Horror', 'Romance' |

#### Create a movie

```http
  POST /movies
```

| Parameter  | Type     | Description                                                    |
| :--------- | :------- | :------------------------------------------------------------- |
| `title`    | `string` | **Required**                                                   |
| `year`     | `number` | **Required**                                                   |
| `director` | `string` | **Required**                                                   |
| `duration` | `number` | **Required**                                                   |
| `poster`   | `url`    | **Required**                                                   |
| `genre`    | `enum`   | **Required**. 'Action', 'Comedy', 'Drama', 'Horror', 'Romance' |
| `rate`     | `number` | **default**: 5. **min**: 1. **max**: 5                         |

#### Update a movie

```http
  PATCH /movies/${id}
```

| Parameter  | Type     | Description                                      |
| :--------- | :------- | :----------------------------------------------- |
| `id`       | `string` | **Required**                                     |
| `title`    | `string` |                                                  |
| `year`     | `number` |                                                  |
| `director` | `string` |                                                  |
| `duration` | `number` |                                                  |
| `poster`   | `url`    |                                                  |
| `genre`    | `enum`   | 'Action', 'Comedy', 'Drama', 'Horror', 'Romance' |
| `rate`     | `number` | **default**: 5. **min**: 1. **max**: 5           |

## Licencias

[MIT](https://choosealicense.com/licenses/mit/)

# Units 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * UNITS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * UNITS Create
  * POST /
  * body: Units fields (see validator)
  */
```

```js
/*
  * UNITS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * UNITS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


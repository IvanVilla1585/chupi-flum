# Materials 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * MATERIALS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * MATERIALS Create
  * POST /
  * body: Materials fields (see validator)
  */
```

```js
/*
  * MATERIALS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * MATERIALS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


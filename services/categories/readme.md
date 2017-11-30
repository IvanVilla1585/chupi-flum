# Categories 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * CATEGORIES  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * CATEGORIES Create
  * POST /
  * body: Categories fields (see validator)
  */
```

```js
/*
  * CATEGORIES Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * CATEGORIES Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


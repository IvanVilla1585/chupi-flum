# Y 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * Y  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * Y Create
  * POST /
  * body: Y fields (see validator)
  */
```

```js
/*
  * Y Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * Y Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


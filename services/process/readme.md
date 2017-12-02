# Process 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * PROCESS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * PROCESS Create
  * POST /
  * body: Process fields (see validator)
  */
```

```js
/*
  * PROCESS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * PROCESS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


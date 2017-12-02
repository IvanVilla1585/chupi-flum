# Machines 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * MACHINES  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * MACHINES Create
  * POST /
  * body: Machines fields (see validator)
  */
```

```js
/*
  * MACHINES Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * MACHINES Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


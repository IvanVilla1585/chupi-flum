# Providers 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * PROVIDERS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * PROVIDERS Create
  * POST /
  * body: Providers fields (see validator)
  */
```

```js
/*
  * PROVIDERS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * PROVIDERS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


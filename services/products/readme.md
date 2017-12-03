# Products 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * PRODUCTS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * PRODUCTS Create
  * POST /
  * body: Products fields (see validator)
  */
```

```js
/*
  * PRODUCTS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * PRODUCTS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


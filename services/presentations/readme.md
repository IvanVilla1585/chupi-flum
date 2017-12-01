# Presentations 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * PRESENTATIONS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * PRESENTATIONS Create
  * POST /
  * body: Presentations fields (see validator)
  */
```

```js
/*
  * PRESENTATIONS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * PRESENTATIONS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```


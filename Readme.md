This is just like the `merge` function in lodash, but will treat array in a different way.

If you use lodash's `merge` function to merge the following 2 object:
```js
{
	a: {
		b: [ 1, 2, 3 ],
		c: 1
	}
}
```

```js
{
	a: {
		b: { x: 1 },
		c: { y: 1 }
	}
}
```

You will get this result:
```js
{
	a: {
		b: [ 1, 2, 3, x: 1 ],
		c: { y: 2 }
	}
}
```

But my `merge` function will get this result:
```js
{
	a: {
		b: { x: 1 },
		c: { y: 2 }
	}
}
```


## Orveride the child class
```
	let clazz = 'block w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700';
	export { clazz as class };
```
OR
```
class="{ $$restProps.class + ' w-full rounded-lg -:p-6 border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'}"
```
> https://github.com/mwnciau/tailwindcss-unimportant
> Help override the class

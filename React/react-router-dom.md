### `老写法`

```jsx
// "react-router-dom": "^6.2.2",  v6以后的版本需要更改写法
import { BrowserRouter as Router, Route } from "react-router-dom";
<Router>
  <Route></Route>
</Router>;
```

### `改版后的`

```jsx
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return routes;
};

<Router>
  <App />
</Router>;
```

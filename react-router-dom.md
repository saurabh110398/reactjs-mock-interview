Routes:
The Routes component is the parent container for all your Route components.
It is responsible for rendering the appropriate route based on the current URL.
It ensures that only one route is rendered at a time, matching the URL path as closely as possible.
In React Router v6, it is the primary way to define your routing structure.
Route:
The Route component defines a single route within your application.
It matches a specific URL path and renders the associated component when that path is active.
Key props for the Route component include:
path: The URL path to match.
element: The component to render when the path matches.
errorElement: The component to render in case of an error during route loading.
loader: A function to load data before rendering the route.
action: A function to handle form submissions or other actions related to the route.
Example:
JavaScript

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
In this example:
BrowserRouter provides the routing context for your application.
Routes is the container for defining your routes.
Two Route components are defined, matching the paths / and /about to their respective components.
Key Differences:
Routes:
Container for all routes, responsible for rendering the correct route based on the URL.
Route:
Defines a single route, matching a specific URL path and rendering the associated component.


### 1. **What is React Router?**
   **Answer**: React Router is a standard library for routing in React. It enables navigation between views of various components, helps with changing the browser URL, and keeps the UI in sync with the URL.

### 2. **How do you install React Router?**
   **Answer**: You can install React Router via npm or yarn:
   - `npm install react-router-dom`
   - `yarn add react-router-dom`

### 3. **What are the main components of React Router?**
   **Answer**:
   - `BrowserRouter`: Wraps the application and handles the URL history.
   - `Routes`: Contains all the route definitions.
   - `Route`: Defines a single route.
   - `Link`: Provides links to navigate around the application.
   - `useNavigate`: A hook used for programmatic navigation.

### 4. **What is the purpose of `BrowserRouter`?**
   **Answer**: `BrowserRouter` is a wrapper component that uses the HTML5 history API to keep your UI in sync with the URL. It manages the routing history internally.

### 5. **How do you define a route in React Router?**
   **Answer**: Use the `Route` component inside the `Routes` component.
   ```jsx
   <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
   </Routes>
   ```

### 6. **What is the difference between `BrowserRouter` and `HashRouter`?**
   **Answer**: `BrowserRouter` uses the HTML5 history API, providing clean URLs (e.g., `/about`). `HashRouter` uses the hash portion of the URL (e.g., `/#/about`) and is better for older browsers.

### 7. **What is `Route` in React Router?**
   **Answer**: The `Route` component is responsible for defining a mapping between a path (URL) and a component that should be rendered when the path is accessed.

### 8. **How can you redirect in React Router?**
   **Answer**: You can use the `Navigate` component to redirect:
   ```jsx
   <Navigate to="/home" />
   ```

### 9. **What is the `useNavigate` hook?**
   **Answer**: The `useNavigate` hook is used for programmatic navigation. It returns a function that you can use to navigate to a different route.
   ```jsx
   const navigate = useNavigate();
   navigate('/home');
   ```

### 10. **How can you pass parameters to routes in React Router?**
   **Answer**: You can pass parameters using the colon syntax in the route's path:
   ```jsx
   <Route path="/user/:id" element={<User />} />
   ```

### 11. **How do you access route parameters in a component?**
   **Answer**: Use the `useParams` hook to access route parameters:
   ```jsx
   const { id } = useParams();
   ```

### 12. **What is the purpose of `Link` in React Router?**
   **Answer**: The `Link` component is used to create navigation links between routes in your application. It works similarly to an anchor (`<a>`) tag but without reloading the page.
   ```jsx
   <Link to="/about">About</Link>
   ```

### 13. **How do you create nested routes in React Router?**
   **Answer**: You can define nested routes by nesting `Route` components inside one another. The parent component should include an `Outlet` component where child routes will render.
   ```jsx
   <Routes>
     <Route path="/dashboard" element={<Dashboard />}>
       <Route path="settings" element={<Settings />} />
     </Route>
   </Routes>
   ```

### 14. **What is the `Outlet` component used for in React Router?**
   **Answer**: `Outlet` is a placeholder component that renders the child routes of a parent route. It’s used when creating nested routes.

### 15. **How can you handle 404 pages in React Router?**
   **Answer**: Use a wildcard route (`*`) to handle unmatched routes:
   ```jsx
   <Route path="*" element={<NotFound />} />
   ```

### 16. **What is `Switch` in React Router v5, and what replaced it in v6?**
   **Answer**: In React Router v5, `Switch` was used to render the first route that matches the location. In React Router v6, `Routes` replaced `Switch`.

### 17. **How do you programmatically navigate backward or forward in history?**
   **Answer**: You can use the `navigate(-1)` or `navigate(1)` to navigate backward or forward:
   ```jsx
   const navigate = useNavigate();
   navigate(-1);  // Go back
   navigate(1);   // Go forward
   ```

### 18. **What is the `useLocation` hook?**
   **Answer**: `useLocation` is a hook that returns the current location object, which contains information about the current URL, like `pathname`, `search`, and `hash`.

### 19. **How can you access query parameters in React Router?**
   **Answer**: You can access query parameters using the `useLocation` hook:
   ```jsx
   const { search } = useLocation();
   const queryParams = new URLSearchParams(search);
   console.log(queryParams.get('page')); // Access query parameter 'page'
   ```

### 20. **What is the `useRoutes` hook in React Router v6?**
   **Answer**: The `useRoutes` hook allows you to define routes using an object-based configuration instead of JSX:
   ```jsx
   const routes = useRoutes([
     { path: '/', element: <Home /> },
     { path: '/about', element: <About /> }
   ]);
   ```

### 21. **What is lazy loading in React Router, and how do you implement it?**
   **Answer**: Lazy loading is the process of loading components only when they are needed. In React Router, you can implement lazy loading using React’s `lazy()` and `Suspense`:
   ```jsx
   const About = React.lazy(() => import('./About'));

   <Suspense fallback={<div>Loading...</div>}>
     <Routes>
       <Route path="/about" element={<About />} />
     </Routes>
   </Suspense>
   ```

### 22. **How do you handle navigation guards in React Router?**
   **Answer**: You can implement navigation guards using the `useNavigate` hook, or by conditionally rendering components based on authentication state.

### 23. **What is the difference between `navigate('/path')` and `<Navigate to="/path" />`?**
   **Answer**: `navigate('/path')` is used for programmatic navigation inside a function, whereas `<Navigate to="/path" />` is used declaratively in JSX.

### 24. **How can you redirect after form submission in React Router?**
   **Answer**: After form submission, you can use `useNavigate()` to redirect to another route:
   ```jsx
   const handleSubmit = () => {
     // Form submission logic
     navigate('/success');
   };
   ```

### 25. **How do you navigate with state in React Router?**
   **Answer**: You can pass state using `useNavigate()` or the `Link` component:
   ```jsx
   navigate('/path', { state: { fromDashboard: true } });
   ```

---

Let's continue with the **React Router interview questions**, ranging from **basic to advanced** topics, covering common scenarios, features, and edge cases in React Router.

### 26. **How can you pass data using `Link` in React Router?**
   **Answer**: You can pass data using the `state` prop in the `Link` component:
   ```jsx
   <Link to="/details" state={{ userId: 123 }}>View Details</Link>
   ```

### 27. **How do you retrieve state passed via `Link` in the destination component?**
   **Answer**: You can retrieve the state using the `useLocation` hook:
   ```jsx
   const location = useLocation();
   const { userId } = location.state;
   ```

### 28. **What are dynamic routes in React Router?**
   **Answer**: Dynamic routes are routes that include parameters that can change based on the URL. These are defined with a colon (`:`) followed by a parameter name:
   ```jsx
   <Route path="/user/:id" element={<User />} />
   ```

### 29. **How do you navigate to a dynamic route in React Router?**
   **Answer**: You can use `Link` or `useNavigate()` to navigate to dynamic routes:
   ```jsx
   <Link to={`/user/${userId}`}>User Profile</Link>
   ```

### 30. **How can you handle nested dynamic routes in React Router?**
   **Answer**: You can combine dynamic routes with nested routes. In the parent route, include an `Outlet` where the nested route will render:
   ```jsx
   <Route path="/user/:id" element={<User />}>
     <Route path="profile" element={<UserProfile />} />
   </Route>
   ```

### 31. **What is the difference between `useParams()` and `useLocation()`?**
   **Answer**:
   - `useParams()`: Used to access dynamic route parameters.
   - `useLocation()`: Used to get the current location object, including the URL and state.

### 32. **How do you create a 404 page in React Router v6?**
   **Answer**: Use the wildcard route (`*`) at the end of your route definitions:
   ```jsx
   <Route path="*" element={<NotFound />} />
   ```

### 33. **How can you render multiple components for a single route in React Router?**
   **Answer**: You can render multiple components inside the `element` prop:
   ```jsx
   <Route path="/dashboard" element={<Dashboard />}>
     <Route path="analytics" element={<Analytics />} />
     <Route path="reports" element={<Reports />} />
   </Route>
   ```

### 34. **How do you handle route guards for authentication in React Router?**
   **Answer**: You can create a `ProtectedRoute` component that checks if the user is authenticated:
   ```jsx
   const ProtectedRoute = ({ children }) => {
     const isAuthenticated = useAuth(); // Custom hook for auth check
     return isAuthenticated ? children : <Navigate to="/login" />;
   };

   <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
   ```

### 35. **How can you handle permission-based routing?**
   **Answer**: You can create a wrapper component (similar to `ProtectedRoute`) to check user permissions and conditionally render components or redirect the user.

### 36. **What is the role of the `history` object in React Router?**
   **Answer**: The `history` object manages session history, allowing you to navigate forward and backward, or programmatically navigate to different routes. It’s abstracted away in React Router v6, but `useNavigate()` performs similar functionality.

### 37. **How does `useNavigate()` differ from `useHistory()` (React Router v5)?**
   **Answer**: In React Router v6, `useNavigate()` replaces `useHistory()`. It returns a function that you can call to navigate, rather than returning an object with navigation methods like `push` or `replace`.

### 38. **How do you replace the current URL without adding a new entry in the history?**
   **Answer**: Use the second argument in `useNavigate()` to replace the current URL:
   ```jsx
   navigate('/new-url', { replace: true });
   ```

### 39. **Can you explain what `index` routes are in React Router v6?**
   **Answer**: An `index` route is a default child route for a parent. It renders when the parent route matches, but no other child routes match. It is defined like this:
   ```jsx
   <Route path="/dashboard" element={<Dashboard />}>
     <Route index element={<DashboardHome />} />
   </Route>
   ```

### 40. **How can you add active class names to links in React Router?**
   **Answer**: Use `NavLink` to automatically add an active class when the link is active:
   ```jsx
   <NavLink to="/home" activeClassName="active">Home</NavLink>
   ```

### 41. **What is `exact` in React Router v5 and how is it handled in v6?**
   **Answer**: In React Router v5, `exact` was used to ensure the route matches exactly. In React Router v6, `Route` automatically behaves like `exact` so the prop is no longer needed.

### 42. **How do you trigger a page scroll to top on route change?**
   **Answer**: You can use the `useEffect` hook to scroll to the top when the route changes:
   ```jsx
   const { pathname } = useLocation();
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
   ```

### 43. **What is the difference between `Link` and `NavLink` in React Router?**
   **Answer**: `Link` is used to navigate between routes, while `NavLink` provides additional functionality, such as adding an active class when the link matches the current route.

### 44. **How can you implement role-based access control in React Router?**
   **Answer**: You can create higher-order components (HOCs) or use custom hooks to check the user's role and conditionally render routes or components based on their access level.

### 45. **What is the difference between `push` and `replace` in navigation?**
   **Answer**: 
   - `push`: Adds a new entry to the browser’s history stack.
   - `replace`: Replaces the current entry in the history stack, without adding a new one.

### 46. **How do you handle breadcrumbs in React Router?**
   **Answer**: You can manually create a breadcrumb component by mapping over the current path using `useLocation()`, or you can use third-party libraries that automate breadcrumb creation.

### 47. **What is the purpose of the `Redirect` component in React Router v5?**
   **Answer**: The `Redirect` component in React Router v5 was used to redirect users to another route. In React Router v6, `Redirect` has been replaced by the `Navigate` component.

### 48. **How do you handle transitions between routes (like animations)?**
   **Answer**: You can use libraries like `react-transition-group` or `framer-motion` to animate components during route transitions:
   ```jsx
   <CSSTransition in={isActive} timeout={300} classNames="fade">
     <Component />
   </CSSTransition>
   ```

### 49. **How do you preload data when navigating to a route?**
   **Answer**: Use `useEffect()` inside the component to fetch data when the route is accessed. Alternatively, you can use a custom hook that preloads data based on the route:
   ```jsx
   useEffect(() => {
     fetchData();
   }, [routeParam]);
   ```

### 50. **How can you implement route transitions for mobile apps with React Router?**
   **Answer**: Use `react-spring` or `framer-motion` for smooth animations, combined with React Router's route changes.

### 51. **How can you use React Router with Redux for authentication?**
   **Answer**: Use the global Redux store to keep track of the user's authentication state. Then, use conditional rendering or navigation guards (`ProtectedRoute`) to allow or prevent access to certain routes.

### 52. **Can you handle different layouts for different routes in React Router?**
   **Answer**: Yes, you can define layout components and wrap your routes with them:
   ```jsx
   const DashboardLayout = ({ children }) => (
     <div className="dashboard-layout">
       <Sidebar />
       {children}
     </div>
   );

   <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
   ```

### 53. **How can you share layout between multiple routes?**
   **Answer**: Use nested routes and `Outlet` to define a shared layout for multiple routes.

---

**Advanced Topics**

### 54. **How can you handle deep linking in React Router?**
   **Answer**: Deep linking refers to linking directly to a nested route or a specific state of your application. With React Router, you can handle deep linking by setting up proper dynamic and nested routes so users can navigate directly to those links.

### 55. **What is the `basename` prop in `BrowserRouter`, and when would you use it?**
   **Answer**: The

 `basename` prop is used to prefix all the routes with a base URL. This is useful when your React app is hosted in a subdirectory:
   ```jsx
   <BrowserRouter basename="/my-app">
     <App />
   </BrowserRouter>
   ```

### 56. **How can you preserve component state between route changes?**
   **Answer**: To preserve component state between route changes, you can either move the state up to a parent component or use global state management solutions like Redux or the Context API.

### 57. **What are route loaders in React Router, and how do they help in server-side rendering (SSR)?**
   **Answer**: In server-side rendering, route loaders are used to fetch data before the component is rendered. This ensures the component has the necessary data when it is rendered on the server.

### 58. **How can you use `react-router-config` for advanced routing in large applications?**
   **Answer**: `react-router-config` is a utility for large apps where you can define routes as an object and render them efficiently, making it easier to manage complex routing structures.

### 59. **How can you prevent access to routes based on user roles in React Router?**
   **Answer**: You can use a custom `PrivateRoute` or `ProtectedRoute` component that checks the user's role before allowing access.

### 60. **What is route-based code splitting in React?**
   **Answer**: Route-based code splitting is the practice of splitting your code into smaller bundles and only loading the code for the routes that the user accesses. This can be achieved using `React.lazy()` and `Suspense` with React Router.

### Advanced React Router Interview Questions (61-100)

### 61. **How does React Router v6 handle error boundaries for routes?**
   **Answer**: React Router v6 supports route-level error boundaries. You can define an error boundary for specific routes, allowing custom error pages:
   ```jsx
   <Route path="/example" element={<Example />} errorElement={<ErrorPage />} />
   ```

### 62. **What are route modules in React Router?**
   **Answer**: Route modules allow you to organize route-specific logic, such as loaders, actions, and components, in a single module. This makes it easier to manage complex routes and their associated logic.

### 63. **What is lazy loading, and how is it achieved with React Router?**
   **Answer**: Lazy loading is a performance optimization where components are only loaded when needed. React Router achieves this with `React.lazy()` and `Suspense`:
   ```jsx
   const LazyComponent = React.lazy(() => import('./LazyComponent'));
   
   <Route path="/lazy" element={
     <Suspense fallback={<div>Loading...</div>}>
       <LazyComponent />
     </Suspense>
   } />
   ```

### 64. **How can you handle route transitions with `Suspense` in React Router?**
   **Answer**: React Router integrates with `React.Suspense` for lazy loading and route transitions. The `Suspense` component allows you to show a loading state while the component is being loaded.

### 65. **What are "route transitions" in React Router, and how can they be optimized?**
   **Answer**: Route transitions refer to navigating between routes and rendering components based on the current route. To optimize transitions, you can implement lazy loading, caching, and minimal re-renders.

### 66. **How can you implement animated transitions between routes?**
   **Answer**: Use libraries like `react-transition-group` or `framer-motion` for animating route transitions. Wrap the `Route` or components with transition logic.

### 67. **How do you handle redirects in React Router programmatically?**
   **Answer**: Use the `useNavigate()` hook to redirect programmatically:
   ```jsx
   const navigate = useNavigate();
   navigate('/home');
   ```

### 68. **What is `hash-based` routing in React Router, and when would you use it?**
   **Answer**: Hash-based routing uses the `#` character in the URL (e.g., `http://example.com/#/home`). It's useful when you're deploying a React app to static file hosting environments where the server doesn't support pushState-based routing.

### 69. **What is the purpose of the `Outlet` component in React Router?**
   **Answer**: `Outlet` is used in parent routes to render child routes. It acts as a placeholder where nested routes are rendered within the parent route's component.

### 70. **What is the difference between `useRoutes` and regular route definitions?**
   **Answer**: `useRoutes()` is a hook that allows you to define routes programmatically as an array of objects instead of JSX components. It's useful for dynamically generating routes.
   ```jsx
   const routes = useRoutes([
     { path: "/home", element: <Home /> },
     { path: "/about", element: <About /> },
   ]);
   ```

### 71. **How can you persist scroll positions across route changes?**
   **Answer**: You can use the `scrollRestoration` API in conjunction with custom hooks or libraries like `react-router-scroll` to persist scroll positions.

### 72. **How does React Router handle relative vs absolute paths?**
   **Answer**: React Router treats paths without a leading `/` as relative to the current route. Paths with a leading `/` are considered absolute.

### 73. **What are loaders and actions in React Router v6, and how do they work?**
   **Answer**: Loaders are used to fetch data before a route is rendered, while actions handle form submissions or other side effects. Loaders return data as part of the route rendering process, and actions modify state based on user interaction.

### 74. **How can you optimize React Router for large applications?**
   **Answer**: You can optimize React Router in large applications by using code-splitting (lazy loading), caching route data, and minimizing unnecessary renders by organizing routes effectively.

### 75. **What is `React Router Config` and why would you use it?**
   **Answer**: `react-router-config` is a utility library that allows you to configure routes in a centralized object-based configuration. It simplifies the management of route hierarchies and makes dynamic routing easier.

### 76. **How do you trigger a modal when navigating to a route?**
   **Answer**: You can use route state or query parameters to conditionally render a modal in your components:
   ```jsx
   const location = useLocation();
   const isModal = location.state && location.state.modal;

   return isModal ? <Modal /> : <PageContent />;
   ```

### 77. **How can you handle query parameters in React Router v6?**
   **Answer**: Use the `useSearchParams()` hook to manage query parameters:
   ```jsx
   const [searchParams, setSearchParams] = useSearchParams();
   const query = searchParams.get("q");

   setSearchParams({ q: "new search term" });
   ```

### 78. **How do you navigate programmatically after form submission in React Router?**
   **Answer**: After form submission, you can use the `useNavigate()` hook to redirect to another route:
   ```jsx
   const navigate = useNavigate();
   const handleSubmit = (e) => {
     e.preventDefault();
     // Process form data
     navigate("/success");
   };
   ```

### 79. **How does the `usePrompt` hook work in React Router?**
   **Answer**: The `usePrompt` hook is used to display a confirmation dialog when the user attempts to navigate away from a page:
   ```jsx
   usePrompt("Are you sure you want to leave?", isDirty);
   ```

### 80. **How do you detect changes in route parameters using hooks?**
   **Answer**: Use `useParams()` to access route parameters and `useEffect()` to detect changes:
   ```jsx
   const { id } = useParams();
   useEffect(() => {
     // Perform side effect when `id` changes
   }, [id]);
   ```

### 81. **Can React Router handle URL fragments (e.g., `#section`)?**
   **Answer**: React Router does not handle fragments directly, but you can use native browser APIs like `window.location.hash` to manage scrolling to fragment IDs.

### 82. **How do you programmatically set search parameters in React Router?**
   **Answer**: Use the `useSearchParams()` hook to set search parameters:
   ```jsx
   const [searchParams, setSearchParams] = useSearchParams();
   setSearchParams({ sort: "asc", page: 1 });
   ```

### 83. **How can you handle dynamic form routes in React Router?**
   **Answer**: Use route parameters or query parameters to create dynamic form routes that can handle different steps or sections in a multi-step form.

### 84. **What is the purpose of the `useInRouterContext` hook?**
   **Answer**: `useInRouterContext()` is a hook that checks if the component is being rendered inside a React Router context. It returns `true` if the component is within the router.

### 85. **How can you dynamically create navigation links based on API data?**
   **Answer**: Fetch the data using an effect or loader, then dynamically map over the data to generate `Link` or `NavLink` components:
   ```jsx
   {menuItems.map((item) => (
     <NavLink key={item.id} to={item.path}>{item.label}</NavLink>
   ))}
   ```

### 86. **How can you achieve deep linking in a single-page application (SPA) with React Router?**
   **Answer**: Deep linking can be achieved by structuring your routes with parameters and rendering components based on those parameters. React Router automatically handles deep linking when users directly visit nested routes.

### 87. **What are transition routes in React Router?**
   **Answer**: Transition routes are routes that implement animation or page transitions during navigation. They can be implemented using `react-transition-group` or `framer-motion`.

### 88. **How do you detect when the user presses the back button in the browser?**
   **Answer**: You can use the `useNavigate()` hook with `navigate(-1)` to detect when the user presses the back button and programmatically handle the navigation.

### 89. **Can React Router be used with Next.js?**
   **Answer**: No, Next.js has its own built-in routing system, so React Router is not typically used with Next.js applications.

### 90. **How do you handle fallback routes for unmatched URLs?**
   **Answer**: Use the wildcard route (`*`) to catch all unmatched URLs and display a fallback page, such as a 404 page:
   ```jsx
   <Route path="*" element={<NotFound />} />
   ```

### 91. **What is the difference between declarative and programmatic navigation in React Router?**
   **Answer**:
   - **Declarative navigation**: Done via `Link` or `NavLink` components in JSX.
   - **Programmatic navigation**: Achieved using the `

useNavigate()` hook or `navigate()` function in JavaScript logic.

### 92. **How do you handle route-specific side effects in React Router?**
   **Answer**: You can handle route-specific side effects using the `useEffect()` hook and the `useLocation()` or `useParams()` hooks to track route changes and execute logic based on the route.

### 93. **What are the benefits of server-side rendering (SSR) with React Router?**
   **Answer**: SSR with React Router allows faster initial page loads, better SEO (since the HTML is pre-rendered), and improves the user experience by serving fully-rendered pages to the client.

### 94. **What are the main challenges when using React Router with SSR?**
   **Answer**: Handling data fetching on the server, synchronizing the initial client and server routes, and ensuring route transitions happen smoothly on both the server and client sides are key challenges in SSR with React Router.

### 95. **How does React Router handle popstate events?**
   **Answer**: React Router listens for `popstate` events triggered by browser back and forward button clicks and updates the UI to reflect the current URL.

### 96. **How can you display a confirmation dialog before leaving a route in React Router?**
   **Answer**: Use the `usePrompt` hook to display a confirmation dialog when the user attempts to leave a route:
   ```jsx
   usePrompt("Are you sure you want to leave?", formIsDirty);
   ```

### 97. **How do you handle multiple nested routes with React Router?**
   **Answer**: Define parent and child routes, using the `Outlet` component in the parent to render child routes dynamically.

### 98. **How does React Router integrate with React Hooks?**
   **Answer**: React Router provides various hooks (`useNavigate`, `useParams`, `useLocation`, etc.) to access the router state and programmatically navigate between routes.

### 99. **What are the potential drawbacks of using React Router for large-scale applications?**
   **Answer**: In large-scale applications, routing logic can become complex and challenging to manage. Code-splitting, performance optimizations, and keeping route configurations modular are essential to avoid performance bottlenecks.

### 100. **What improvements were introduced in React Router v6?**
   **Answer**: Key improvements include:
   - Simplified route matching.
   - Better support for nested routes and layouts.
   - Removal of the `Switch` component in favor of `Routes`.
   - Declarative data fetching with loaders and actions.
   - Improved support for TypeScript.

---

This concludes the full set of 100 React Router interview questions ranging from basic to advanced levels. Let me know if you'd like any further explanations or follow-ups!
Would you like to continue with the next set of **advanced React Router interview questions**?
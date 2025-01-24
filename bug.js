```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
```
This code uses `react-router-dom` v6.  A common error is forgetting that in v6, `<Route>` elements need to be children of `<Routes>`, and `<Routes>` is a child of `<BrowserRouter>`.  Also, `path="*"` is not supported anymore; instead, you'd use `path="/*"` to catch all other routes.
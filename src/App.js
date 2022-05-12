import React, { useEffect, useState }  from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import Posts from './components/pages/Posts/Posts';
import PostLoadingComponent from './components/pages/PostLoading/PostLoading';
import Register from './components/pages/Register/Register';
function App() {
  const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/posts' element={<PostLoading isLoading={appState.loading} posts={appState.posts} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        {/* <div className="App">
          <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div> */}
        <Footer />
      </Router>

    );
  }

export default App;

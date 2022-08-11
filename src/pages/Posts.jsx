import React, { useEffect, useState } from 'react';
import List from '../components/List';
import PostForm from '../components/PostForm';
import '../style/style.css';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import Button from '../components/UI/button/Button';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPagesCount } from '../components/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  /*Это состояние, которое содержит массив постов*/
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getALL(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts();
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>get JSON</button>
      <Button style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </Button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка {postError}!</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <List
          remove={removePost}
          posts={sortedAndSearchedPosts}
          className="list"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;

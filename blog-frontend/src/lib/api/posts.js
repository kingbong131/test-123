import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>   // 글쓰기 페이지 제목, 글, 테그 데이터 전달 
  client.post('/api/posts', { title, body, tags });

export const readPost = id => client.get(`/api/posts/${id}`);  // 읽기 전용 게시판 페이지 조회 데이터 전달 

export const listPosts = ({ page, username, tag }) => {  // 게사판 페이지 페이지, id, 태그 데이터 전달 
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) => // 글쓰기 페이지 id, 제목 , 글 , 태그 데이터 전다 
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = id => client.delete(`/api/posts/${id}`);  // 글 삭제 데이터 전달 

import client from './client';

// 로그인
export const login = ({ username, password }) =>       //로그인 페이지 입력 아이디, 비밀번호 데이터 전달 
  client.post('/api/auth/login', { username, password });        

// 회원가입
export const register = ({ username, password }) =>    //회원가입 페이지 입력 아이디, 비밀번호 데이터 전달  
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check'); // 로그아웃 데이터 전달 

// 로그아웃
export const logout = () => client.post('/api/auth/logout'); //로그아웃 데이터 전달 

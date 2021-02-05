import React, { Component } from 'react';
import Customer from './Customer'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '가오고등학교',
    'name': '라온하제'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '계룡용남고등학교',
    'name': 'New BTS'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/1',
    'local': '계룡',
    'school': '계룡용남고등학교',
    'name': '소아암번역동아리'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com/64/64/1',
    'local': '청원',
    'school': '교원대부속고등학교',
    'name': '바이오포커스'
  },
  {
    'id': 5,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '구봉고등학교',
    'name': '지니어스'
  },
  {
    'id': 6,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '괴정고등학교',
    'name': '괴고라'
  },
  {
    'id': 7,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '괴정고등학교',
    'name': '트레핀'
  },
  {
    'id': 8,
    'image': 'https://placeimg.com/64/64/1',
    'local': '논산',
    'school': '논산고등학교',
    'name': 'NSV'
  },
  {
    'id': 9,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대덕고등학교',
    'name': 'ETFC'
  },
  {
    'id': 10,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대덕고등학교',
    'name': '머덕아이들'
  },
  {
    'id': 11,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대성고등학교',
    'name': '트리니티'
  },
  {
    'id': 12,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': 'ACTION'
  },
  {
    'id': 13,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': 'Challenger'
  },
  {
    'id': 14,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': 'evolution'
  },
  {
    'id': 15,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': '뮤테이션'
  },
  {
    'id': 16,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': '9테이션'
  },
  {
    'id': 17,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': 'MCHV'
  },
  {
    'id': 18,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': '신세계'
  },
  {
    'id': 19,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': 'M.V.P'
  },
  {
    'id': 20,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전과학고등학교',
    'name': '여명37'
  },
  {
    'id': 21,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전여자고등학교',
    'name': 'CTA'
  },
  {
    'id': 22,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전여자고등학교',
    'name': 'STN'
  },
  {
    'id': 23,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '고빵감빵'
  },
  {
    'id': 24,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '레장쥬'
  },
  {
    'id': 25,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '온새미로'
  },
  {
    'id': 26,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '일석이조'
  },
  {
    'id': 27,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '준엄'
  },
  {
    'id': 28,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': 'PoD'
  },
  {
    'id': 29,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': 'DFLHS25日'
  },
  {
    'id': 30,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '사나래'
  },
  {
    'id': 31,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '아모르'
  },
  {
    'id': 32,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '도완고등학교',
    'name': '천사'
  },
  {
    'id': 33,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '도완고등학교',
    'name': 'UNI'
  },
  {
    'id': 34,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '도완고등학교',
    'name': '간지'
  },
  {
    'id': 35,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '둔산여자고등학교',
    'name': '메디컬'
  },
  {
    'id': 36,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '둔산여자고등학교',
    'name': '잉글리쉬 헬로우'
  },
  {
    'id': 37,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '둔산여자고등학교',
    'name': '흠'
  },
  {
    'id': 38,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '동방고등학교',
    'name': '오뚜기'
  },
  {
    'id': 39,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '동방고등학교',
    'name': '파아란'
  },
  {
    'id': 40,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '둔원고등학교',
    'name': '귀여미들'
  },
  {
    'id': 41,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '만년고등학교',
    'name': '만봉'
  },
  {
    'id': 42,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '만년고등학교',
    'name': '아연주'
  },
  {
    'id': 43,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '만년고등학교',
    'name': 'M.E.C'
  },
  {
    'id': 44,
    'image': 'https://placeimg.com/64/64/1',
    'local': '아산',
    'school': '삼성고등학교',
    'name': 'OK'
  },
  {
    'id': 45,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '서대전고등학교',
    'name': '사들'
  },
  {
    'id': 46,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '서대전고등학교',
    'name': 'SGL'
  },
  {
    'id': 47,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '서대전고등학교',
    'name': '좋은거하는 사람들'
  },
  {
    'id': 48,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '서대전고등학교',
    'name': '감자에싹이나서'
  },
  {
    'id': 49,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '서대전고등학교',
    'name': '카오스'
  },
  {
    'id': 50,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '성모여자고등학교',
    'name': 'DB'
  },
  {
    'id': 51,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '성모여자고등학교',
    'name': 'ongoing'
  },
  {
    'id': 52,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '성모여자고등학교',
    'name': 'MLM'
  },
  {
    'id': 53,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '성모여자고등학교',
    'name': '유네스코'
  },
  {
    'id': 54,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '송촌고등학교',
    'name': 'PH1'
  },
  {
    'id': 55,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '송촌고등학교',
    'name': '에너자이저'
  },
  {
    'id': 56,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': '크레용팝'
  },
  {
    'id': 57,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'CCH'
  },
  {
    'id': 58,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'Antidote'
  },
  {
    'id': 59,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'Movers'
  },
  {
    'id': 60,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'grit'
  },
  {
    'id': 61,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '우송고등학교',
    'name': '소모임'
  },
  {
    'id': 62,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '용남고등학교',
    'name': 'Y.A.O'
  },
  {
    'id': 63,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '우성고등학교',
    'name': '다온'
  },
  {
    'id': 64,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '유성고등학교',
    'name': '이유식'
  },
  {
    'id': 65,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '유성여자고등학교',
    'name': '늘해랑'
  },
  {
    'id': 66,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '유성여자고등학교',
    'name': 'YG'
  },
  {
    'id': 67,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '전민고등학교',
    'name': 'merci'
  },
  {
    'id': 68,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '전민고등학교',
    'name': '인터렉션'
  },
  {
    'id': 69,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '제일고등학교',
    'name': '선견지명'
  },
  {
    'id': 70,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '지족고등학교',
    'name': 'AN/A'
  },
  {
    'id': 71,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '천안여자고등학교',
    'name': '행복한 천여'
  },
  {
    'id': 72,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '청주청원고등학교',
    'name': '오더시트'
  },
  {
    'id': 73,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '충남외국어고등학교',
    'name': '유노이아'
  },
  {
    'id': 74,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '충남외국어고등학교',
    'name': '예그리나'
  },
  {
    'id': 75,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '충남외국어고등학교',
    'name': '히오스'
  },
  {
    'id': 76,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '충남여자고등학교',
    'name': '아이유'
  },
  {
    'id': 77,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '한밭고등학교',
    'name': '이레'
  },
  {
    'id': 78,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '한밭고등학교',
    'name': '프리메딕'
  },
  {
    'id': 79,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '호수돈여자고등학교',
    'name': '그루터기'
  },
  {
    'id': 80,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '호수돈여자고등학교',
    'name': '아메바2조'
  },
  {
    'id': 81,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '호수돈여자고등학교',
    'name': '아메바3조'
  },
  {
    'id': 82,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '호수돈여자고등학교',
    'name': '아메바4조'
  },
  {
    'id': 83,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '송촌고등학교',
    'name': 'PH1'
  },
  {
    'id': 84,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'ETFC'
  },
  {
    'id': 85,
    'image': 'https://placeimg.com/64/64/1',
    'local': '아산',
    'school': '삼성고등학교',
    'name': 'BLUE'
  },
  {
    'id': 86,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전여자고등학교',
    'name': 'TFC'
  },
  {
    'id': 87,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '우리'
  },
  {
    'id': 88,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대성고등학교',
    'name': 'TASTE'
  },
  {
    'id': 89,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'T.C.A'
  },
  {
    'id': 90,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '김치볶음밥'
  },
  {
    'id': 91,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대신고등학교',
    'name': '쿰척쿰척'
  },
  {
    'id': 92,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '대전외국어고등학교',
    'name': '콘치즈'
  },
  {
    'id': 91,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'ETS'
  },
  {
    'id': 92,
    'image': 'https://placeimg.com/64/64/1',
    'local': '천안',
    'school': '천안중앙고등학교',
    'name': '중앙단'
  },
  {
    'id': 93,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '둔산여자고등학교',
    'name': '응답하라'
  },
  {
    'id': 94,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '연합',
    'name': 'G&G'
  },
  {
    'id': 95,
    'image': 'https://placeimg.com/64/64/1',
    'local': '대전',
    'school': '한빛고등학교',
    'name': 'PH-5'
  },
  {
    'id': 96,
    'image': 'https://placeimg.com/64/64/1',
    'local': '논산',
    'school': '건양고등학교',
    'name': '메디컬플러스'
  },

]

class view extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>지역</TableCell>
              <TableCell>학교</TableCell>
              <TableCell>팀이름</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} local={c.local} school={c.school} name={c.name} />
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(view);

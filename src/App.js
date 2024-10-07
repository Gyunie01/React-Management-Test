import React, { Component } from 'react';
import './App.css';
import Customer from './componets/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/id/1/150/150',
  'name': '장나영',
  'birthday': '010130',
  'gender': '여자',
  'job': '기타리스트'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/2/150/150',
    'name': '이시연',
    'birthday': '000516',
    'gender': '여자',
    'job': '보컬'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/3/150/150',
    'name': '홍지혜',
    'birthday': '981101',
    'gender': '여자',
    'job': '드러머'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from '../../../style/MyProfilePageStyle/ProfileBoxListsStyle/ProfileBoxListsStyle';

import BoxOrderList from './BoxOrderList';

function ProfileBoxChallenge({
  orderId,
  approved_at,
  requestuniquenumber,
  itemName,
  totalAmount,
}) {
  const [orderLists, setOrderLists] = useState({
    orderId: '',
    approved_at: '',
    requestuniquenumber: '',
    itemName: '',
    totalAmount: '',
  });

  console.log(orderLists);

  // // get요청
  // async function getOrder() {
  //   try {
  //     const response = await axios.get(`order/list`, {
  //       headers: {
  //         'ngrok-skip-browser-warning': 'none',
  //         Authorization:
  //           'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NUBrYWthby5jb20iLCJpYXQiOjE2Njg1NjQ0OTMsImV4cCI6MTY3Nzc4NDY3M30.FlS9lUOnWzAi9UFkZOT2UqT4FYmGiiRsST2wfPJErEiQLYYsJw9jSMwYaEwrM1DceWXltVQ5r8o0_OWjFGJa8w',
  //       },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getOrder();
  // }, []);

  //
  // useEffect(() => {
  //   axios.get(`order/list`).then((res) => {
  //     console.log(res.data);
  //     setPayment(...res.data);
  //   });
  // }, []);

  // // get요청
  // const getOrder = async () => {
  //   try {
  //     axios
  //       .get(`order/list`, {
  //         headers: {
  //           'ngrok-skip-browser-warning': 'none',
  //           Authorization:
  //             'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NUBrYWthby5jb20iLCJpYXQiOjE2Njg1NjQ0OTMsImV4cCI6MTY3Nzc4NDY3M30.FlS9lUOnWzAi9UFkZOT2UqT4FYmGiiRsST2wfPJErEiQLYYsJw9jSMwYaEwrM1DceWXltVQ5r8o0_OWjFGJa8w',
  //         },
  //       })
  //       .then((response) => {
  //         const order = response.data;
  //         // console.log(order);
  //         setOrderLists(order.data);
  //       });
  //   } catch (error) {
  //     console.log('error: ', error);
  //   }
  // };
  // useEffect(() => {
  //   getOrder();
  // }, []);

  return (
    <S.ProfileBoxOrderListComponent>
      <h1 className="title">결제내역</h1>
      <S.ProfileBoxOrderList>
        <div className="orderId-size">결제번호</div>
        <div className="requestuniquenumber-size">주문번호</div>
        <div className="itemName-size">챌린지 이름</div>
        <div className="approved_at-size">결제시간</div>
        <div className="totalAmount-size">결제금액</div>
      </S.ProfileBoxOrderList>
      <BoxOrderList
        orderId={orderLists.orderId}
        approved_at={orderLists.approved_at}
        requestuniquenumber={orderLists.equestuniquenumber}
        itemName={orderLists.itemName}
        totalAmount={orderLists.totalAmount}
      />
      <BoxOrderList />
      <BoxOrderList />
    </S.ProfileBoxOrderListComponent>
  );
}

export default ProfileBoxChallenge;
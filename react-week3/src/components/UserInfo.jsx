import React from 'react';

function UserInfo(props) {
  const birthYear = new Date().getFullYear() - props.age;
  return <p>{props.name}, age {props.age}, was born in {birthYear}.</p>;
}

export default UserInfo;

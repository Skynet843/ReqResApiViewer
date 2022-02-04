import {useEffect, useRef, useState} from 'react';
import {getUsers} from '../services/Api';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = useRef(2);
  console.log('You Call Me');
  useEffect(() => {
    setLoading(true);
    getUsers(currentPage)
      .then(({data, total_pages}) => {
        totalPage.current = total_pages;
        setUsers(prev => [...prev, ...data]);
        setLoading(false);
      })
      .catch(err => {
        console.alert(err);
        setLoading(false);
      });
    // return () => setUsers([]);
  }, [currentPage]);

  const getNextPage = () => {
    if (totalPage.current > currentPage) {
      console.log('BOOM');
      setCurrentPage(prev => prev + 1);
    }
  };
  return [users, loading, getNextPage];
};
export default useUsers;

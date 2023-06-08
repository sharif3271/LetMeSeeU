import { IUser } from 'appRoot/src/models/side-effects';
import React, { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'src/components/shared';
import { MainServices } from 'src/services';

export function useContacts() {

  const service = useMemo(() => new MainServices(), []);
  const [users, setUsers] = useState<IUser[] | null | undefined>();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [debounced] = useDebounce(query);

  useEffect(() => {
    if (debounced.length >= 2) {
      setLoading(true);
      setError(false);
      service.getAll(debounced)
        .then(({data}) => {
          if (data?.data?.length) {
            setUsers(data.data);
          }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  }, [debounced]);

  return {
    users,
    query,
    setQuery,
    isLoading: loading,
    hasError: error,
    notStarted: users === undefined,
    noResult: users && users.length === 0,
  };
}
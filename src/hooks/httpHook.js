import { useState, useCallback } from 'react';
import axios from 'axios';
export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const request = useCallback(async (url, method = "get", data = null) => {
    setLoading(true);
    let response = null;
    await axios({
      url, method, data
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        response = res.data;
      })
      .catch((err) => {
        console.error(err.response.data);
        setLoading(false);
        setError(err.response.data)
      })
    return response;
  }, [])

  const clearError = () => {
    setError('');
    setSuccess(false);
  };

  return {
    loading, request, error, clearError, success
  }
}
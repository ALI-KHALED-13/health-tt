import { useEffect, useState, useCallback } from "react";


export const useAsync = <T, A>(asyncFunc: (args: A) => Promise<T>, args: A, dependencies: any[] = []) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await asyncFunc(args);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error.message : String(error));
          setData(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    fetchData();
    
    // to Cleanup up, instead of signals 
    return () => {
      isMounted = false;
    };
  
  }, [asyncFunc, args, ...dependencies]);
  
  return { data, error, isLoading };
};

interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}


type ExecuteFunction<A extends any[], T> = (...args: A) => Promise<T>;


export const useAsyncFunc = <T, A extends any[] = any[]>(
  asyncFunc: (...args: A) => Promise<T>, 
  deps: any[] = []
): [ExecuteFunction<A, T>, AsyncState<T>, ()=> void] => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const execute = useCallback(async (...args: A): Promise<T> => {
    let result: T;
    setIsLoading(true);
    
    try {
      result = await asyncFunc(...args);
      setData(result);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
      setData(null);
      throw error;
    } finally {
      setIsLoading(false);
    }
    
    return result;
  
  }, [asyncFunc, ...deps]);
  
  const reset =()=> {
    setData(null);
    setIsLoading(false);
    setError(null)
  }
  return [execute, { data, isLoading, error }, reset];
};
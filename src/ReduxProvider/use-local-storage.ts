export default function useLocalStorage(key: string, defaultState: any){
    return {
        updateLocalStorage: (data: any = null) => {
            console.log("write", data);
            if (!data) return defaultState;
            localStorage.setItem(key, JSON.stringify(data));
            return data;
        },
        readLocalStorage: () => {
            if (typeof window !== 'undefined') {
              const data = localStorage.getItem(key);
              console.log("read", data);
              return !!data && data !== "undefined"
                ? JSON.parse(data) 
                : defaultState;
            } 
            return defaultState;
          },
          
    }
}
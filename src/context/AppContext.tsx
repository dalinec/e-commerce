import { IContext, IProduct, IState, ItemKey } from '@src/model';
import { ReactNode, createContext } from 'react';
import { useLocalStorage } from '@mantine/hooks';

export const AppContext = createContext<IContext>(null as any);

interface IAppContextProviderProps {
  children: ReactNode;
}

const initialState: IState = {
  cart: [],
  wishlist: [],
  checkout: [],
};

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [state, setState] = useLocalStorage<IState>({
    key: 'rw-buy',
    defaultValue: initialState,
  });

  const addItem = (key: ItemKey, product: IProduct, count?: number) => {
    setState((prevState) => ({
      ...prevState,
      [key]: [...prevState[key], { ...product, count: count || 1 }],
    }));
  };
  const removeItem = (key: ItemKey, productId: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: prevState[key].filter((item) => item.id !== productId),
    }));
  };
  const increaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (index !== -1) {
      items[index].count += 1;
      setState((prevState) => ({ ...prevState, [key]: items }));
    }
  };
  const decreaseCount = (key: ItemKey, productId: string) => {
    const items = [...state[key]];
    const index = items.findIndex((item) => item.id === productId);
    if (index !== -1) {
      items[index].count -= 1;
      if (items[index].count < 1) {
        items.splice(index, 1);
      }
      setState((prevState) => ({ ...prevState, [key]: items }));
    }
  };
  const resetItems = (key: ItemKey) => {
    setState((prevState) => ({ ...prevState, [key]: [] }));
  };

  const isAdded = (key: ItemKey, productId: string): boolean => {
    return state[key].some((item) => item.id === productId);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        increaseCount,
        decreaseCount,
        resetItems,
        isAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

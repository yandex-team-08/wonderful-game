import { createContext  } from 'react';

interface ITheme {
    palette?: {
        mode: string
    }
}

export const Context = createContext<ITheme | undefined>({});

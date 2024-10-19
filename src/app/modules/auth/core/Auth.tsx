import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {AuthModel, UserModel} from './_models'
import * as authHelper from './AuthHelpers'
import {getUserByToken} from './_requests'
import {WithChildren} from '../../../../_metronic/helpers'
import ApiAxios from './ApiAxios'

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  logout: () => void
  wishCount: number;
  updateWishlistCount: () => void;
  cartCount: number;
  updateCartCount: () => void;

}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
  wishCount: 0,
  updateWishlistCount: () => {},
  cartCount: 0,
  updateCartCount: () => {}
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const [wishCount, setWishCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if(auth) {
      updateWishlistCount()
      updateCartCount()
    }
  }, [auth])

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  const updateWishlistCount = () => {
    ApiAxios.get(`mywishlist/`).then(
      (resp) => {
        setWishCount(resp?.data?.count)
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const updateCartCount = () => {
    ApiAxios.get(`cart/`).then(
      (resp) => {
        setCartCount(resp?.data?.count)
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  return (
    <AuthContext.Provider value={{auth, saveAuth, currentUser, setCurrentUser, logout, wishCount, updateWishlistCount, cartCount, updateCartCount}}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({children}) => {
  const {auth, logout, setCurrentUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    const requestUser = async (apiToken: string) => {
      try {
        if (!didRequest.current) {
          // const {data} = await getUserByToken(apiToken)
          // if (data) {
          //   setCurrentUser(data)
          // }
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (auth && auth.access) {
      requestUser(auth.access)
    } else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}

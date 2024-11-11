import { createContext } from 'react'
import { UserData } from '../../types'
import User from '../classes/user'

export const AuthContext = createContext<User | undefined>(undefined)
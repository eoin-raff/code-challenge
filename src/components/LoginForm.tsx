import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getUserById, getUserByUsername } from '../utils/api'
import { UserData } from '../../types'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    username: string
}

interface LoginFormProps {
    setUser: Dispatch<SetStateAction<UserData | undefined>>
}
const LoginForm = ({ setUser }: LoginFormProps) => {
    const [username, setUsername] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = ({ username }) => setUsername(username)

    useEffect(() => {
        (async () => {
            if (!username) return
            if (isLoading) return
            setIsLoading(true)
            setApiError('')

            try {
                const { id } = await getUserByUsername(username)
                const user = await getUserById(id)
                setUser(user)
                setIsLoading(false)
            } catch (error) {
                setApiError('Error finding user')
                setIsLoading(false)

            }
        })()


    }, [username])


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
            <h1>Enter Username to log in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Username:</p>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("username", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.username && <span>This field is required</span>}
                </label>
                <button type="submit">Log In</button>
            </form>
            {apiError && <p>{apiError}</p>}
        </>
    )
}

export default LoginForm




// export default function App() {

//   )
// }
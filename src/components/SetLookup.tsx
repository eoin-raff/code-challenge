import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getSetById, getSetByName, getUserById, getUserByUsername } from '../utils/api'
import { SetData, UserData } from '../../types'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    setname: string
}

interface SetLookupProps {
    setSet: Dispatch<SetStateAction<SetData | undefined>>
}
const SetLookup = ({ setSet }: SetLookupProps) => {
    const [setname, setSetname] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = ({ setname }) => setSetname(setname)

    useEffect(() => {
        (async () => {
            if (!setname) return
            if (isLoading) return
            setIsLoading(true)
            setApiError('')

            try {
                const { id } = await getSetByName(setname)
                const set = await getSetById(id)
                setSet(set)
                setIsLoading(false)
            } catch (error) {
                setApiError('Error finding set')
                setIsLoading(false)
            }
        })()


    }, [setname])


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Set Name:</p>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("setname", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.setname && <span>This field is required</span>}
                </label>
                <button type="submit">Search</button>
            </form>
            {apiError && <p>{apiError}</p>}
        </>
    )
}

export default SetLookup




// export default function App() {

//   )
// }
import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'
import useAuthStore from '../store/authStore' // Like, only login users

interface IProps {
    handleLike: ()=> void; // say hanleLike is a function with no return.
    handleDislike: ()=> void;
    likes: any;
}


const LikeButton = ({likes, handleLike, handleDislike}:IProps) => {

    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const { userProfile }: any = useAuthStore()
    const filterLikes = likes?.filter((item: any) => item._ref === userProfile?._id)

    useEffect(() => {
        if(filterLikes?.length > 0) {
            setAlreadyLiked(true)
        } else {
            setAlreadyLiked(false)
        }
    }, [filterLikes, likes]) // useEffect will be called when the likes changed

    return (
        <div className="flex gap-6">
            <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
                {alreadyLiked ? (
                    <div className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]" onClick={handleDislike}> {/** from detail page */}
                        <MdFavorite className="text-lg md:text-2xl" />
                    </div>
                ):(
                    <div className="bg-primary rounded-full p-2 md:p-4" onClick={handleLike}>
                        <MdFavorite className="text-lg md:text-2xl" />
                    </div>
                )}
                <p className="text-md font-semibold"> { likes?.length || 0 } </p>
            </div>

        </div>
    )
}

export default LikeButton
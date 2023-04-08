import { useState, useEffect } from "react"
import Image from "next/image"
import { GoVerified } from "react-icons/go"
import axios from "axios"


import VideoCard from "../../components/VideoCard"
import NoResults from "../../components/NoResults"
import {IUser, Video} from "../../types"
import { BASE_URL } from "../../utils"

interface IProps {
    data: {
        user: IUser,
        userVideos: Video[],
        userLikedVideos: Video[]
    }
}

const Profile = ({data}:IProps) => {
    const {user, userVideos, userLikedVideos} = data
    const [showUserVideos, setShowUserVideos] = useState(true)
    const videos = showUserVideos ? 'border-b-2 border-black' : 'text-gray-400'
    const liked = !showUserVideos ? 'border-b-2 border-black' : 'text-gray-400'
    const [videoList, setVideoList] = useState<Video[]>([]) // MARK->LIST

    useEffect(()=>{
        if(showUserVideos){
            setVideoList(userVideos)
        } else {
            setVideoList(userLikedVideos)
        }
    },[showUserVideos, userLikedVideos, userVideos]) //dependencies

    return (
        <div className="w-full">
            <div className="flex gap-6 md:gap:10 mb-4 bg-white w-full">
                <div className="w-16 h-16 md:w-32 md:h-32">
                    <Image
                        src={user.image}
                        width={120}
                        height={120}
                        className="rounded-full"
                        alt="user profile"
                        layout="responsive"
                    />
                </div>

                <div className="hidden xl:block">
                    <p className="md:text-2xl tracking-wider justify-center flex gap-1 items-center text-md font-bold text-primary lowercase">
                        {user.userName.replaceAll(' ', '')}
                        <GoVerified className="text-blue-400" />
                    </p>
                    <p className="capitalize md:text-2xl text-gray-400 text-xs">
                        {user.userName}
                    </p>
                </div>

            </div>

            <div>
                <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
                    <p className={`text-xl font-semibold cursor-pointer mt-2 ${videos}`} onClick={()=>setShowUserVideos(true)}>
                        Videos
                    </p>
                    <p className={`text-xl font-semibold cursor-pointer mt-2 ${liked}`} onClick={()=>setShowUserVideos(false)}>
                        Liked
                    </p>
                </div>
                {/** LOOP OVER VIDEO LIST */}
                <div className="flex gap-6 flex-wrap md:justify-start">
                    {videoList.length > 0 ? (
                        videoList.map((post: Video, idx: number) => (
                            <VideoCard post={post} key={idx} />
                        ))
                    ) : <NoResults text={`No ${showUserVideos ? '' : 'Liked'} Videos Yet`} />}
                </div>
                 
            </div>

        </div>
    )
}

export const getServerSideProps = async({
    params: {id}
    }:{
    params: {id: string}
}) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`)

    return {
        props: {data: res.data}
    }
}

export default Profile
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import  ScreenShot  from "../entities/ScreenShot"
import ms from "ms";


const useScreenShots = (gameId : number) => {
    const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`)
    return useInfiniteQuery({
        queryKey: ['ScreenShots', gameId],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                page: pageParam,
            },
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next  ? allPages.length + 1 : undefined
        },
        staleTime : ms('24hr')
    })
};

export default useScreenShots;
import { useAuth0 } from "@auth0/auth0-react";
import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type createUserRequest = {
    auth0Id:string,
    email:string,
}
const getToken = () => {
    // Replace this with the actual logic to get the token, e.g., from local storage or context
    const { getAccessTokenSilently } = useAuth0();
    const accessToken = getAccessTokenSilently();
    console.log(accessToken)
    return accessToken;
  };

export const UserApi = createApi({
    
    reducerPath: "User",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/api`,
        credentials: "include",
        
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: ({user , token}) => ({
                url: "/user",
                method: "POST",
                body: user,
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            }),
            invalidatesTags: ["User"],
        })
})
})

export const {
    useCreateUserMutation,
} = UserApi;